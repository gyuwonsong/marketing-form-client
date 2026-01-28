import { useMemo, useState } from "react";
import Input from "../common/Input";
import RadioGroup from "../common/RadioGroup";
import Button from "../common/Button";
import Modal from "../common/Modal";

import { onlyDigits, isValidBirth, isValidPhone } from "../../lib/validators";
import { submitLead } from "../../lib/api";

const initial = {
  name: "",
  birth: "",
  gender: "M",
  phone: "",
};

const initialConsent = {
  all: false,
  c1: false,
  c2: false,
  c3: false,
};

const ErrorText = ({ msg }) => {
  return (
    <div className="min-h-[18px]">
      {msg ? <p className="text-sm text-red-600">{msg}</p> : null}
    </div>
  );
};

export default function LeadForm({ product = "CAREGIVER" }) {
  const [v, setV] = useState(initial);
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const [consent, setConsent] = useState(initialConsent);
  const [consentModalOpen, setConsentModalOpen] = useState(false);

  const [marketingAgree, setMarketingAgree] = useState(false);

  const agreeRequired = consent.c1 && consent.c2 && consent.c3;

  const errors = useMemo(() => {
    const e = {};
    if (!v.name.trim()) e.name = "* 이름을 입력하세요.";
    if (!isValidBirth(v.birth)) e.birth = "* 생년월일(YYYYMMDD)을 입력하세요.";
    if (!isValidPhone(v.phone)) e.phone = "* 연락처를 입력하세요.";
    return e;
  }, [v, agreeRequired]);

  const canSubmit = Object.keys(errors).length === 0;

  const setAll = (checked) => {
    setConsent({
      all: checked,
      c1: checked,
      c2: checked,
      c3: checked,
    });
  };

  const setOne = (key, checked) => {
    setConsent((prev) => {
      const next = { ...prev, [key]: checked };
      const allNext = next.c1 && next.c2 && next.c3;
      return { ...next, all: allNext };
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!canSubmit || loading) return;

    setLoading(true);
    try {
      await submitLead({
        product,
        name: v.name.trim(),
        birth: v.birth,
        gender: v.gender,
        phone: v.phone,
        consent: {
          collectUse: consent.c1,
          thirdParty: consent.c2,
          outsource: consent.c3,
          all: consent.all,
          marketing: marketingAgree,
        },
      });

      setDone(true);
      setV(initial);
      setConsent(initialConsent);
      setMarketingAgree(false);
    } catch (err) {
      alert("전송에 실패했습니다. 잠시 후 다시 시도해주세요.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const openConsentModal = () => setConsentModalOpen(true);

  return (
    <>
      <form className="space-y-2" onSubmit={onSubmit}>
        <div className="space-y-2">
          <Input
            placeholder="이름"
            value={v.name}
            onChange={(e) => setV((p) => ({ ...p, name: e.target.value }))}
          />
          <ErrorText msg={errors.name} />
        </div>

        <div className="space-y-2">
          <Input
            placeholder="생년월일 (YYYYMMDD)"
            value={v.birth}
            onChange={(e) =>
              setV((p) => ({
                ...p,
                birth: onlyDigits(e.target.value).slice(0, 8),
              }))
            }
          />
          <ErrorText msg={errors.birth} />
        </div>

        <div className="space-y-2">
          <RadioGroup
            name="gender"
            value={v.gender}
            onChange={(gender) => setV((p) => ({ ...p, gender }))}
            options={[
              { label: "남", value: "M" },
              { label: "여", value: "F" },
            ]}
          />
        </div>

        <div className="space-y-2">
          <Input
            placeholder="연락처"
            value={v.phone}
            onChange={(e) =>
              setV((p) => ({
                ...p,
                phone: onlyDigits(e.target.value).slice(0, 11),
              }))
            }
          />
          <ErrorText msg={errors.phone} />
        </div>

        <div className="rounded-xl border bg-gray-50 p-3 space-y-2">
          <button
            type="button"
            onClick={openConsentModal}
            className="w-full text-left"
          >
            <div className="flex items-center justify-between gap-3">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={agreeRequired}
                  onClick={(e) => {
                    e.preventDefault();
                    openConsentModal();
                  }}
                  readOnly
                />
                개인정보 수집·활용/제공/위탁 동의(필수)
              </label>

              <span className="text-sm font-semibold text-secondary underline">
                자세히 보기
              </span>
            </div>
          </button>

          <div className="flex items-center justify-between gap-3">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={marketingAgree}
                onChange={(e) => setMarketingAgree(e.target.checked)}
              />
              마케팅 수집•이용 동의(선택)
            </label>
          </div>
        </div>

        <Button
          type="submit"
          variant="secondary"
          className="w-full"
          disabled={!canSubmit || loading}
        >
          {loading ? "전송 중..." : "상담 신청하기"}
        </Button>

        {done ? (
          <p className="text-sm font-semibold text-secondary">
            신청이 완료되었습니다. 곧 연락드리겠습니다.
          </p>
        ) : null}
      </form>

      <Modal
        open={consentModalOpen}
        title="상담신청 및 보험상품 소개를 위한 개인정보 수집/활용 동의"
        onClose={() => setConsentModalOpen(false)}
      >
        <div className="space-y-4">
          <p>
            굿리치㈜ (이하 당사)는 상담신청 및 보험상품 소개를 위해 고객님의
            개인정보 수집, 이용 및 제공에 대한 동의를 받고 있습니다.
            <br />
            개인정보 수집 및 활용에 동의 하십니까?
          </p>

          <div className="rounded-xl border bg-gray-50 p-3">
            <label className="flex items-center gap-2 font-semibold text-secondary">
              <input
                type="checkbox"
                checked={consent.all}
                onChange={(e) => setAll(e.target.checked)}
              />
              전체동의
            </label>
            <p className="mt-2 text-xs text-gray-600">
              전체동의 선택 시 1~3 항목에 모두 동의합니다.
            </p>
          </div>

          <div className="rounded-2xl border bg-white p-4 space-y-2">
            <div className="flex items-center justify-between gap-3">
              <p className="font-extrabold text-secondary">
                1. 개인정보 수집·이용에 대한 동의
              </p>
              <label className="flex items-center gap-2 text-sm font-semibold">
                <input
                  type="checkbox"
                  checked={consent.c1}
                  onChange={(e) => setOne("c1", e.target.checked)}
                />
                동의
              </label>
            </div>

            <p className="text-sm text-gray-700">
              당사 및 당사 업무수탁자는 「개인정보보호법」, 「정보통신망
              이용촉진 및 정보 보호 등에 관한 법률」에 따라 귀하의 개인정보를
              다음과 같이 수집·이용하고자 합니다.
            </p>

            <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
              <li>개인정보의 수집·이용 목적 : 보험상품/서비스 소개 및 상담</li>
              <li>수집·이용하는 개인정보의 내용 : 성명, 전화번호</li>
              <li>개인정보 보유·이용 기간 : 1년 3년 5년</li>
              <li>보험상담 및 가입권유 연락방법 : 전화, 문자</li>
            </ul>

            <div className="text-xs text-gray-600 space-y-1">
              <p>
                ※ 본 동의를 거부하실수 있으나, 거부하는 경우에는 보험상품 소개
                및 가입상담 서비스 제공이 제한될 수 있습니다.
              </p>
              <p>
                ※ 동의하시더라도 당사 고객센터(02-2267-8300)를 통해 동의를
                철회하거나 가입권유 목적의 연락에 대한 중단을 요청하실 수
                있습니다.
              </p>
            </div>
          </div>

          <div className="rounded-2xl border bg-white p-4 space-y-2">
            <div className="flex items-center justify-between gap-3">
              <p className="font-extrabold text-secondary">
                2. 개인정보 제공에 대한 동의
              </p>
              <label className="flex items-center gap-2 text-sm font-semibold">
                <input
                  type="checkbox"
                  checked={consent.c2}
                  onChange={(e) => setOne("c2", e.target.checked)}
                />
                동의
              </label>
            </div>

            <p className="text-sm text-gray-700">
              당사는 「개인정보보호법」, 「정보통신망 이용촉진 및 정보 보호 등에
              관한 법률」에 따라 귀하의 개인정보를 다음과 같이 제3자에게
              제공하고자 합니다.
            </p>

            <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
              <li>
                개인정보를 제공받는 자 : 당사와 모집위탁계약을 체결한
                자(설계사,대리점)
              </li>
              <li>
                개인정보를 제공받는 자의 이용목적 : 보험상품/서비스 소개 및 상담
              </li>
              <li>제공할 개인정보의 내용 : 성명, 전화번호</li>
              <li>제공받는 자의 개인정보 보유·이용 기간 : 1년 3년 5년</li>
              <li>보험상담 및 가입권유 연락방법 : 전화, 문자</li>
            </ul>

            <div className="text-xs text-gray-600 space-y-1">
              <p>
                ※ 본 동의를 거부하실수 있으나, 거부하는 경우에는 보험상품 소개
                및 가입상담 서비스 제공이 제한될 수 있습니다.
              </p>
              <p>
                ※ 동의하시더라도 당사 고객센터(02-2267-8300)를 통해 동의를
                철회하거나 가입권유 목적의 연락에 대한 중단을 요청하실 수
                있습니다.
              </p>
            </div>
          </div>

          <div className="rounded-2xl border bg-white p-4 space-y-2">
            <div className="flex items-center justify-between gap-3">
              <p className="font-extrabold text-secondary">
                3. 개인정보 처리 위탁 동의
              </p>
              <label className="flex items-center gap-2 text-sm font-semibold">
                <input
                  type="checkbox"
                  checked={consent.c3}
                  onChange={(e) => setOne("c3", e.target.checked)}
                />
                동의
              </label>
            </div>

            <p className="text-sm text-gray-700">
              당사는 「개인정보보호법」 및 「정보통신망 이용 촉진 및 정보보호
              등에 관한 법률」에 따라 서비스와 관련하여 귀하의 개인정보를 다음과
              같이 처리 위탁하고자 합니다.
            </p>

            <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
              <li>위탁 업체명 : ㈜처음소리</li>
              <li>
                위탁 목적 : 보험가입 상담신청자 개인정보를 서버에 수집, 보관,
                처리, 전달, 파기
              </li>
            </ul>
          </div>

          <div className="pt-2">
            <button
              className="w-full rounded-md bg-secondary px-4 py-2 text-lg font-semibold text-white hover:bg-secondary/90"
              type="button"
              onClick={() => setConsentModalOpen(false)}
            >
              확인
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
}
