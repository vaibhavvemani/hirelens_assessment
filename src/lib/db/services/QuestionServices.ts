import { connectDB } from "@/lib/db/mongodb"
import { IQuestion } from "@/lib/db/types/QuestionTypes"
import Question from "@/lib/db/models/QuestionSchema";

// const DB_NAME = "assessment";
// const COLLECTION_NAME = "questions";

export async function add_questions(question_data: Partial<IQuestion>) {
  try {
    await connectDB();
    const newQuestion = new Question(question_data);
    const savedQuestion = await newQuestion.save();

    return savedQuestion;
  }
  catch(error) {
    console.error("Error adding question to database: ", error);
    throw error;
  }
}

export async function update_question(id: string, updated_data: Partial<IQuestion>) {
  try {
    await connectDB();
    const result = await Question.findByIdAndUpdate(
      id,
      { $set: updated_data },
      {
        new: true,
        runValidators: true,
      }
    );
    return result;
  }
  catch(error) {
    console.error("Error updating question: ", error);
    throw error;
  }
}

// export async function delete_question(id: string) {
//   const client = await clientPromise;
//   const db = client.db(DB_NAME);
//   const result = await db
//     .collection<Question>(COLLECTION_NAME)
//     .deleteOne( { _id: new ObjectId(id) } )

//   return result.acknowledged;
// }

// export async function get_questions(filter: Filter) {

//   const query:Filter = {}
//   if (filter._id) query._id = new ObjectId(filter._id);
//   if (filter.topic) query.topic = filter.topic;
//   if (filter.category) query.category = filter.category;
//   if (filter.difficulty) query.difficulty = filter.difficulty;

//   console.log(query);

//   const client = await clientPromise;
//   const db = client.db(DB_NAME);
//   const result = await db
//   .collection<Question>(COLLECTION_NAME)
//   .find(query)
//   .toArray()

//   return result;
// }