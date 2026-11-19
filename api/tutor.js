// 🤖 AI 튜터는 비용 문제로 그만뒀어요. 이 주소로 와도 AI를 부르지 않고 바로 "끝났어요"라고만 답해요.
export default function handler(req, res) {
  res.status(410).json({ error: "AI 튜터는 이제 쓰지 않아요." });
}
