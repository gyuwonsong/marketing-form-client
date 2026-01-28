import { CONFIG } from "./config";

export async function submitLead(payload) {
  if (!CONFIG.API_BASE_URL) {
    console.log("[MOCK] submitLead", payload);
    await new Promise((r) => setTimeout(r, 400));
    return { ok: true };
  }

  const res = await fetch(`${CONFIG.API_BASE_URL}/leads`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`submitLead failed: ${res.status} ${text}`);
  }

  return res.json().catch(() => ({ ok: true }));
}
