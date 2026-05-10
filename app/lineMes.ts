export default async function lineMes(mes: string) {
  const token = process.env.LINE_CHANNEL_ACCESS_TOKEN;
  const targetId = process.env.LINE_TARGET_ID;

  const res = await fetch("https://api.line.me/v2/bot/message/push", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      to: targetId,
       messages: [
        {
          type: "text",
          text: mes,
        },
      ],
    })
  });

  if (!res.ok) {
    const err = await res.text();
    console.error("LINE Messaging API error:", err);
  }
}
