import express from "express";
const router = express.Router();

router.get("/404", (req, res) => {
  res.status(404).render("error", {
    options: {
      title: `الصفحة غير موجودة 404`,
      keywords: ["صفحة الخطأ 404", "عنوان URL غير صحيح", "عنوان URL غير موجود", "error", "404", "لم يتم العثور على الصفحة", "صفحة غير موجودة", "صفحة غير متاحة", "رسالة الخطأ 404"],
      description: "صفحة الخطأ 404 هي صفحة تظهر عندما يتم الوصول إلى عنوان URL غير صحيح أو غير موجود. تهدف هذه الصفحة إلى إعلام المستخدم بأن الصفحة التي يحاول الوصول إليها غير متاحة.",
      status: 404,
      errorTitle: "الصفحة غير موجودة",
    }
  });
});

router.get("/500", (req, res) => {
  res.status(500).render("error", {
    options: {
      title: "خطأ في الخادم الداخلي 500",
      keywords: ["صفحة الخطأ 500", "عنوان URL غير صحيح", "عنوان URL غير موجود", "error", "500", "لم يتم العثور على الصفحة", "صفحة غير موجودة", "صفحة غير متاحة", "رسالة الخطأ 500", "خطأ في الخادم الداخلي"],
      description: `صفحة الخطأ 500 تعني "خطأ في الخادم الداخلي" وتظهر عندما يحدث خطأ تقني داخل الخادم يعيقه عن معالجة الطلب بشكل صحيح.`,
      status: 500,
      errorTitle: "خطأ في الخادم الداخلي",
    }
  });
});

export default router;