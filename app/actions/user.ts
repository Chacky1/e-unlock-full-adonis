import Lesson from "#models/lesson";
import User from "#models/user";
import { inject } from "@adonisjs/core";

export default class UserAction {
  @inject()
  async handleCompleteLesson(userId: number, lessonId: number) {
    const user = await User.query().preload('lessons').where('id', userId).firstOrFail();
    const lesson = await Lesson.findOrFail(lessonId);

    if (user.lessons.some((userLesson) => userLesson.id === lesson.id)) return;

    await user.related('lessons').attach([lesson.id]);
  }

  @inject()
  async handleIncompleteLesson(userId: number, lessonId: number) {
    const user = await User.query().preload('lessons').where('id', userId).firstOrFail();
    const lesson = await Lesson.findOrFail(lessonId);

    if (!user.lessons.some((userLesson) => userLesson.id === lesson.id)) return;

    await user.related('lessons').detach([lesson.id]);
  }
}
