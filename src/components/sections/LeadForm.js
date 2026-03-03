import { useMemo, useState } from "react";
import Input from "../common/Input";
import RadioGroup from "../common/RadioGroup";
import Button from "../common/Button";
import Modal from "../common/Modal";

import { onlyDigits, isValidBirth, isValidPhone } from "../../lib/validators";
import { submitLead } from "../../lib/api";

const initialForm = {
  name: "",
  birthDate: "",
  gender: "M",
  phoneNumber: "",
};

const initialAgreements = {
  all: false,
  collectUse: false,
  thirdParty: false,
  outsource: false,
  agreeYear1: "1",
  agreeYear2: "1",
};

const PRODUCT_TYPES = {
  CAREGIVER: "간병보험",
  CHILD: "어린이보험",
  FETUS: "태아보험",
  CANCER: "암보험",
  HEALTH: "종합건강보험",
  SIMPLE: "간편보험",
  MEDICAL: "실손보험",
  YOUTH: "청년보험",
  DEMENTIA_CARE: "치매간병보험",
};

const ErrorText = ({ msg }) => (
  <div className="min-h-[18px]">
    {msg ? <p className="text-sm text-red-600">{msg}</p> : null}
  </div>
);

export default function LeadForm({ type = "CARE GIVER" }) {
  const safeType = PRODUCT_TYPES[type] ? type : "CAREGIVER";

  const [form, setForm] = useState(initialForm);
  const [agreements, setAgreements] = useState(initialAgreements);

  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const privacyAgree =
    agreements.collectUse && agreements.thirdParty && agreements.outsource;

  const errors = useMemo(() => {
    const e = {};
    if (!form.name.trim()) e.name = "* 이름을 입력하세요.";
    if (!isValidBirth(form.birthDate))
      e.birthDate = "* 생년월일(YYYYMMDD)을 입력하세요.";
    if (!isValidPhone(form.phoneNumber))
      e.phoneNumber = "* 연락처를 입력하세요.";
    return e;
  }, [form]);

  const canSubmit = Object.keys(errors).length === 0;

  const setAllAgreements = (checked) => {
    setAgreements((prev) => ({
      ...prev,
      all: checked,
      collectUse: checked,
      thirdParty: checked,
      outsource: checked,
    }));
  };

  const setAgreement = (key, checked) => {
    setAgreements((prev) => {
      const next = { ...prev, [key]: checked };
      const allNext = next.collectUse && next.thirdParty && next.outsource;
      return { ...next, all: allNext };
    });
  };

  const retainYearOptions = [
    { label: "1년", value: "1" },
    { label: "3년", value: "3" },
    { label: "5년", value: "5" },
  ];

  const openAgreementModal = () => setModalOpen(true);

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!canSubmit || loading) return;

    setLoading(true);
    try {
      await submitLead({
        type: PRODUCT_TYPES[safeType],
        name: form.name.trim(),
        birthDate: form.birthDate,
        gender: form.gender,
        phoneNumber: form.phoneNumber,
        agreeYear1: Number(agreements.agreeYear1),
        agreeYear2: Number(agreements.agreeYear2),
      });

      setDone(true);
      setForm(initialForm);
      setAgreements(initialAgreements);
    } catch (err) {
      alert("전송에 실패했습니다. 잠시 후 다시 시도해주세요.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <form className="space-y-2" onSubmit={onSubmit}>
        <div className="space-y-2">
          <Input
            placeholder="이름"
            value={form.name}
            onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
          />
          <ErrorText msg={errors.name} />
        </div>

        <div className="space-y-2">
          <Input
            placeholder="생년월일 (YYYYMMDD)"
            value={form.birthDate}
            onChange={(e) =>
              setForm((p) => ({
                ...p,
                birthDate: onlyDigits(e.target.value).slice(0, 8),
              }))
            }
          />
          <ErrorText msg={errors.birthDate} />
        </div>

        <div className="space-y-2">
          <RadioGroup
            name="gender"
            value={form.gender}
            onChange={(gender) => setForm((p) => ({ ...p, gender }))}
            options={[
              { label: "남", value: "M" },
              { label: "여", value: "F" },
            ]}
          />
        </div>

        <div className="space-y-2">
          <Input
            placeholder="연락처"
            value={form.phoneNumber}
            onChange={(e) =>
              setForm((p) => ({
                ...p,
                phoneNumber: onlyDigits(e.target.value).slice(0, 11),
              }))
            }
          />
          <ErrorText msg={errors.phoneNumber} />
        </div>

        <div className="rounded-xl border bg-gray-50 p-3 space-y-2">
          <button
            type="button"
            onClick={openAgreementModal}
            className="w-full text-left"
          >
            <div className="flex items-center justify-between gap-3">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={privacyAgree}
                  onClick={(e) => {
                    e.preventDefault();
                    openAgreementModal();
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
        open={modalOpen}
        title="상담신청 및 보험상품 소개를 위한 개인정보 수집/활용 동의"
        onClose={() => setModalOpen(false)}
      >
        <div className="space-y-4">
          <p>
            굿리치(주) (이하 당사)는 상담신청 및 보험상품 소개를 위해 고객님의
            개인정보 수집, 이용 및 제공에 대한 동의를 받고 있습니다.
            <br />
            개인정보 수집 및 활용에 동의 하십니까?
          </p>

          <div className="rounded-xl border bg-gray-50 p-3">
            <label className="flex items-center gap-2 font-semibold text-secondary">
              <input
                type="checkbox"
                checked={agreements.all}
                onChange={(e) => setAllAgreements(e.target.checked)}
              />
              전체동의
            </label>
            <p className="mt-2 text-xs text-gray-600">
              전체동의 선택 시 개인정보 필수 항목(1~3)에 모두 동의합니다.
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
                  checked={agreements.collectUse}
                  onChange={(e) => setAgreement("collectUse", e.target.checked)}
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
              <li>보험상담 및 가입권유 연락방법 : 전화, 문자</li>
            </ul>

            <div className="space-y-2 pt-1">
              <p className="text-sm text-gray-700 font-semibold">
                개인정보 보유·이용 기간
              </p>
              <div className="flex items-center gap-4 text-sm text-gray-700">
                {retainYearOptions.map((opt) => (
                  <label
                    key={opt.value}
                    className="inline-flex items-center gap-2"
                  >
                    <input
                      type="radio"
                      name="agreeYear1"
                      value={opt.value}
                      checked={agreements.agreeYear1 === opt.value}
                      onChange={(e) =>
                        setAgreements((p) => ({
                          ...p,
                          agreeYear1: e.target.value,
                        }))
                      }
                    />
                    {opt.label}
                  </label>
                ))}
              </div>
            </div>

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
                  checked={agreements.thirdParty}
                  onChange={(e) => setAgreement("thirdParty", e.target.checked)}
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
              <li>보험상담 및 가입권유 연락방법 : 전화, 문자</li>
            </ul>

            <div className="space-y-2 pt-1">
              <p className="text-sm text-gray-700 font-semibold">
                개인정보 보유·이용 기간
              </p>
              <div className="flex items-center gap-4 text-sm text-gray-700">
                {retainYearOptions.map((opt) => (
                  <label
                    key={opt.value}
                    className="inline-flex items-center gap-2"
                  >
                    <input
                      type="radio"
                      name="agreeYear2"
                      value={opt.value}
                      checked={agreements.agreeYear2 === opt.value}
                      onChange={(e) =>
                        setAgreements((p) => ({
                          ...p,
                          agreeYear2: e.target.value,
                        }))
                      }
                    />
                    {opt.label}
                  </label>
                ))}
              </div>
            </div>

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
                  checked={agreements.outsource}
                  onChange={(e) => setAgreement("outsource", e.target.checked)}
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
              <li>위탁 업체명 : 광고사(처음소리)</li>
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
              onClick={() => setModalOpen(false)}
            >
              확인
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
}
