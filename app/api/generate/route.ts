import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(
  process.env.GEMINI_API_KEY!
);

export async function POST(req: Request) {

  try {

    const body = await req.json();

    const mood = body.mood;

    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash",
    });

    const prompt = `
Generate 5 short powerful affirmations.

Mood: ${mood}

Tone:
- emotionally supportive
- calming
- modern
- concise

Keep each affirmation under 18 words.
`;

    const result = await model.generateContent(prompt);

    const response = result.response.text();

    return Response.json({
      text: response,
    });

  } catch (error) {

    console.log(error);

    return Response.json(
      {
        error: "Failed to generate affirmations",
      },
      {
        status: 500,
      }
    );

  }

}