 const Discord = require('discord.js');
const epic = new Discord.Client();

epic.on('ready',async () => {
  epic.channels.find(ch => ch.id === "487045322929995777" && ch.type === 'voice').join();
});

// طبعا عشان الكود يشتغل بكفاءة لازم يكون البوت مفتوح 24 ساعة
// البوت بيخرج برا الروم اذا الخادم قفل
// جميع الحقوق محفوظة لسيرفر كودز

epic.login("NDg4MDA2NjgzNjMzNzc4Njg4.DnWBMw.ZY8ESd3ijZLkKEiCu7GEtQlUhxM")
