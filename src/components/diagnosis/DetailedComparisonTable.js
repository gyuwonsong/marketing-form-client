const rows = [
  {
    before: { name: "운전자보험", price: "20,000원" },
    beforeNote: "유지",
    beforeRowSpan: 2,

    after: { name: "운전자보험", price: "20,000원" },
    afterNote: "유지",
    afterRowSpan: 2,
  },
  {
    before: { name: "암보험", price: "24,500원" },
    beforeNote: null,

    after: { name: "암보험", price: "24,500원" },
    afterNote: null,
  },
  {
    before: { name: "종합보험", price: "159,900원", highlight: true },
    beforeNote: "중복보장 정리",
    beforeRowSpan: 4,
    after: { name: "건강보험", price: "51,573원", highlightAfter: true },
    afterNote: "신규",
  },
  {
    before: { name: "상해보험", price: "23,600원", highlight: true },
    beforeNote: null,
    after: { name: "암보험", price: "43,216원", highlightAfter: true },
    afterNote: "비갱신형 신규",
  },
  {
    before: { name: "암보험", price: "24,500원", highlight: true },
    beforeNote: null,
    after: null,
    afterNote: null,
  },
  {
    before: { name: "건강보험", price: "30,000원", highlight: true },
    beforeNote: null,
    after: null,
    afterNote: null,
  },

  {
    before: { name: "건강보험", price: "138,000원", highlight: true },
    beforeNote: "갱신형 정리",
    beforeRowSpan: 1,
    after: null,
    afterNote: null,
  },
];

export default function ComparisonTable() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex justify-between mb-6 text-2xl font-semibold">
        <div className="text-secondary">월 420,500원 (리모델링 전)</div>
        <div className="text-main">월 139,289원 (리모델링 후)</div>
      </div>

      <div className="rounded-xl overflow-hidden shadow-xl border">
        <table className="w-full text-center border-collapse">
          <thead>
            <tr className="text-white text-lg">
              <th className="bg-gray-400 py-5">리모델링 전</th>
              <th className="bg-gray-400">전문가 의견</th>
              <th className="bg-secondary">리모델링 후</th>
              <th className="bg-secondary">전문가 의견</th>
            </tr>
          </thead>

          <tbody>
            {rows.map((row, idx) => (
              <tr key={idx} className="border-t">
                <td className="bg-gray-100 py-5 px-6">
                  {row.before && (
                    <div className="flex justify-between">
                      <span>{row.before.name}</span>
                      <span
                        className={
                          row.before.highlight
                            ? "text-[#E5542E] line-through font-semibold"
                            : ""
                        }
                      >
                        {row.before.price}
                      </span>
                    </div>
                  )}
                </td>

                {row.beforeNote !== null && (
                  <td
                    rowSpan={row.beforeRowSpan || 1}
                    className="bg-gray-200 text-[#E5542E] font-bold align-middle"
                  >
                    {row.beforeNote}
                  </td>
                )}

                <td className="bg-gray-50 py-5 px-6">
                  {row.after ? (
                    <div className="flex justify-between">
                      <span>{row.after.name}</span>
                      <span
                        className={
                          row.after.highlightAfter
                            ? "text-main font-semibold"
                            : ""
                        }
                      >
                        {row.after.price}
                      </span>
                    </div>
                  ) : (
                    ""
                  )}
                </td>

                {row.afterNote !== null && (
                  <td
                    rowSpan={row.afterRowSpan || 1}
                    className="text-main font-bold align-middle"
                  >
                    {row.afterNote}
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
