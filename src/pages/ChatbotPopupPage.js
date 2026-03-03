import { useMemo, useState } from "react";
import { MdClose, MdRefresh, MdSend } from "react-icons/md";

const QUICK = [
  { id: "q1", label: "보험금 사례 알아볼래✨" },
  { id: "q2", label: "암보험 알아볼래🍀" },
  { id: "q3", label: "실비 개편 핵심만" },
];

function nowTime() {
  const d = new Date();
  const hh = String(d.getHours()).padStart(2, "0");
  const mm = String(d.getMinutes()).padStart(2, "0");
  return `${hh}:${mm}`;
}

export default function ChatbotPopupPage() {
  const [input, setInput] = useState("");

  const [messages, setMessages] = useState(() => [
    {
      id: "m1",
      role: "bot",
      text: "안녕하세요. 굿리치 플러스 상담 도우미입니다.\n어떤 점이 가장 궁금하신가요?",
      time: nowTime(),
    },
    {
      id: "m2",
      role: "bot",
      text: "예) 치료비 부담, 보장 구성, 보험료 수준, 가입 시점 등",
      time: nowTime(),
    },
  ]);

  const headerTitle = "굿리치 플러스 상담";

  const hero = useMemo(
    () => ({
      title: "상담을 더 빠르게",
      desc: "간단 질문으로 보장 방향을 잡아드려요.",
    }),
    [],
  );

  const pushBot = (text) => {
    setMessages((prev) => [
      ...prev,
      { id: crypto.randomUUID(), role: "bot", text, time: nowTime() },
    ]);
  };

  const pushUser = (text) => {
    setMessages((prev) => [
      ...prev,
      { id: crypto.randomUUID(), role: "user", text, time: nowTime() },
    ]);
  };

  const handleSend = () => {
    const v = input.trim();
    if (!v) return;
    pushUser(v);
    setInput("");

    // mock 응답
    window.setTimeout(() => {
      pushBot(
        "좋아요. 몇 가지만 확인할게요.\n1) 가입 대상(본인/가족)\n2) 나이대(대략)\n3) 가장 걱정되는 상황(진단비/입원·수술/생활비 등)",
      );
    }, 250);
  };

  const handleQuick = (label) => {
    pushUser(label);
    window.setTimeout(() => {
      if (label.includes("암보험")) {
        pushBot(
          "암보험은 보통 ①진단비 ②치료(수술·항암·입원) ③생활비(소득공백) 축으로 봅니다.\n원하시면 현재 보장/예산 범위부터 먼저 잡아볼까요?",
        );
        return;
      }
      if (label.includes("실비")) {
        pushBot(
          "실손은 세대별로 자기부담/보장구조가 달라요.\n현재 가입 연도(대략)와 특약(도수·비급여 등) 여부만 알려주시면 비교 포인트를 정리해드릴게요.",
        );
        return;
      }
      pushBot(
        "보험금 사례는 '진단비가 생활비로 쓰이는 경우'와 '치료비 공백을 메우는 경우'가 많아요.\n원하시면 상황별 예시 2~3개로 보여드릴까요?",
      );
    }, 200);
  };

  const handleReset = () => {
    setMessages([
      {
        id: "m1",
        role: "bot",
        text: "안녕하세요. 굿리치 플러스 상담 도우미입니다.\n어떤 점이 가장 궁금하신가요?",
        time: nowTime(),
      },
    ]);
  };

  return (
    <div className="h-screen w-screen bg-white">
      {/* Top bar */}
      <div className="sticky top-0 z-20 border-b bg-white/90 backdrop-blur">
        <div className="flex h-14 items-center justify-between px-4">
          <button
            type="button"
            onClick={() => window.close()}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl hover:bg-gray-100"
            aria-label="닫기"
            title="닫기"
          >
            <MdClose className="text-2xl text-secondary" />
          </button>

          <div className="text-center">
            <p className="text-sm font-extrabold text-secondary">
              {headerTitle}
            </p>
            <p className="text-[11px] text-gray-500">AI 챗봇 • mock</p>
          </div>

          <button
            type="button"
            onClick={handleReset}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl hover:bg-gray-100"
            aria-label="새로고침"
            title="새로고침"
          >
            <MdRefresh className="text-2xl text-secondary" />
          </button>
        </div>
      </div>

      {/* Body */}
      <div className="mx-auto flex h-[calc(100vh-56px)] max-w-[520px] flex-col">
        {/* Intro card */}
        <div className="px-4 pt-4">
          <div className="rounded-2xl border bg-white p-4 shadow-sm">
            <p className="text-sm font-extrabold text-secondary">
              {hero.title}
            </p>
            <p className="mt-1 text-sm text-gray-600">{hero.desc}</p>

            <div className="mt-3 flex flex-wrap gap-2">
              {QUICK.map((q) => (
                <button
                  key={q.id}
                  type="button"
                  onClick={() => handleQuick(q.label)}
                  className="rounded-full bg-secondary/5 px-3 py-2 text-sm font-semibold text-secondary hover:bg-secondary/10"
                >
                  {q.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto px-4 py-4">
          <div className="space-y-3">
            {messages.map((m) => {
              const isUser = m.role === "user";
              return (
                <div
                  key={m.id}
                  className={`flex ${isUser ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={[
                      "max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed shadow-sm",
                      isUser
                        ? "bg-main text-white"
                        : "bg-gray-100 text-secondary",
                    ].join(" ")}
                  >
                    <pre className="whitespace-pre-wrap font-sans">
                      {m.text}
                    </pre>
                    <p
                      className={[
                        "mt-1 text-[10px]",
                        isUser ? "text-white/80" : "text-gray-500",
                      ].join(" ")}
                    >
                      {m.time}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom input */}
        <div className="sticky bottom-0 border-t bg-white px-3 py-3">
          <div className="flex items-center gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleSend();
              }}
              placeholder="무엇이든 물어보세요"
              className="h-12 flex-1 rounded-xl border border-gray-200 bg-white px-4 text-sm outline-none focus:border-secondary/40"
            />
            <button
              type="button"
              onClick={handleSend}
              className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-main text-white hover:bg-main/90"
              aria-label="보내기"
              title="보내기"
            >
              <MdSend className="text-2xl" />
            </button>
          </div>

          <div className="mt-2 flex items-center justify-between">
            <p className="text-[11px] text-gray-500">
              예시 화면입니다. 실제 상담/연결은 추후 연동
            </p>
            <button
              type="button"
              className="rounded-full bg-secondary/5 px-3 py-2 text-[12px] font-extrabold text-secondary hover:bg-secondary/10"
              onClick={() => pushBot("설계사 연결은 추후 연동 예정입니다.")}
            >
              설계사 연결
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
