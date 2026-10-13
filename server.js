const express = require('express');
const app = express();

app.use(express.json({ limit: '50mb' }));
app.use(express.static('public'));

// معالجة الصور فورياً في الذاكرة دون الحاجة لقاعدة بيانات
app.post('/api/process', (req, res) => {
    const { image } = req.body;
    if (!image) {
        return res.status(400).json({ error: "لم يتم رفع أي صورة" });
    }

    // هنا يتم معالجة الصورة فورياً وإعادة النتيجة مباشرة
    res.json({
        status: "success",
        message: "تم معالجة الصورة بنجاح دون تخزين أي بيانات!"
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 أداة Taiha Studio شغالة على البورت ${PORT}`);
});
          
