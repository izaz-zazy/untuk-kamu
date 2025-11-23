import { useState, useEffect } from 'react';
import { Heart, Sparkles, RefreshCw, Languages, Mail } from 'lucide-react';

export default function ReasonsILoveYou() {
  const [currentReason, setCurrentReason] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [showHeart, setShowHeart] = useState(false);
  const [language, setLanguage] = useState('en'); // 'en', 'id', 'ar'
  const [showFinalMessage, setShowFinalMessage] = useState(false);

  const translations = {
    en: {
      title: "Reasons Why I Love You",
      subtitle: "From Indonesia to Libya 🇮🇩 ❤️ 🇱🇾",
      reasonLabel: "Reason",
      of: "of",
      button: "Show Another Reason",
      finalButton: "A Special Message for You 💌",
      footer: "Distance means so little when you mean so much 💕",
      reasons: [
        "Your smile in every photo you send brightens my darkest days",
        "You always know how to make me laugh through our chats, no matter the time difference",
        "Your strength and independence inspire me every single day",
        "The way you understand me without me having to say a word",
        "How patient you are with our long-distance situation",
        "Your kindness towards everyone around you that shows in your stories",
        "The way you support my dreams and ambitions through our conversations",
        "Your beautiful voice in every voice note that I replay over and over",
        "How you make me feel loved even through messages and photos",
        "Your intelligence and the way you see the world",
        "The little things you do to show you care, even from afar",
        "How you never give up on us, no matter how hard it gets",
        "Your beautiful eyes in every photo that take my breath away",
        "The way you make ordinary text messages feel special",
        "How you believe in me even when I don't believe in myself",
        "Your sense of humor in our chats that always catches me off guard",
        "How you always reply with care and warmth whenever I share my feelings",
        "How you make the distance feel a little less far with every message",
        "Your courage to love someone you've never met in person across continents",
        "Simply because you're YOU, and that's more than enough"
      ]
    },
    id: {
      title: "Alasan Kenapa Aku Cinta Kamu",
      subtitle: "Dari Indonesia ke Libya 🇮🇩 ❤️ 🇱🇾",
      reasonLabel: "Alasan",
      of: "dari",
      button: "Tampilkan Alasan Lain",
      finalButton: "Pesan Spesial Untukmu 💌",
      footer: "Jarak tidak berarti apa-apa ketika kamu berarti segalanya 💕",
      reasons: [
        "Senyummu di setiap foto yang kamu kirim menerangi hari-hari tergelapku",
        "Kamu selalu tahu cara membuatku tertawa lewat chat kita, tidak peduli perbedaan waktu",
        "Kekuatan dan kemandirian mu menginspirasi ku setiap hari",
        "Cara kamu memahami ku tanpa aku harus mengatakannya",
        "Bagaimana kesabaranmu dengan situasi jarak jauh kita",
        "Kebaikanmu terhadap semua orang yang terlihat dari cerita-ceritamu",
        "Cara kamu mendukung mimpi dan ambisiku lewat percakapan kita",
        "Suaramu yang indah di setiap voice note yang kuputar berulang kali",
        "Bagaimana kamu membuatku merasa dicintai lewat pesan dan foto",
        "Kecerdasanmu dan cara kamu melihat dunia",
        "Hal-hal kecil yang kamu lakukan untuk menunjukkan kepedulianmu, meski dari jauh",
        "Bagaimana kamu tidak pernah menyerah pada kita, tidak peduli seberapa sulitnya",
        "Matamu yang indah di setiap foto yang membuatku terpesona",
        "Cara kamu membuat pesan biasa terasa istimewa",
        "Bagaimana kamu percaya padaku bahkan ketika aku tidak percaya pada diriku sendiri",
        "Selera humormu di chat kita yang selalu mengejutkanku",
        "Bagaimana kamu selalu membalas dengan perhatian dan kehangatan ketika aku berbagi perasaan",
        "Bagaimana kamu membuat jarak terasa sedikit lebih dekat dengan setiap pesan",
        "Keberanianmu untuk mencintai seseorang yang belum pernah kamu temui secara langsung lintas benua",
        "Hanya karena kamu adalah KAMU, dan itu lebih dari cukup"
      ]
    },
    ar: {
      title: "أسباب حبي لك",
      subtitle: "من إندونيسيا إلى ليبيا 🇮🇩 ❤️ 🇱🇾",
      reasonLabel: "السبب",
      of: "من",
      button: "إظهار سبب آخر",
      finalButton: "رسالة خاصة لك 💌",
      footer: "المسافة لا تعني شيئاً عندما تعني لي كل شيء 💕",
      reasons: [
        "ابتسامتك في كل صورة ترسلها تضيء أحلك أيامي",
        "تعرف دائماً كيف تجعلني أضحك من خلال محادثاتنا، بغض النظر عن فارق التوقيت",
        "قوتك واستقلاليتك تلهمني كل يوم",
        "الطريقة التي تفهمني بها دون أن أقول كلمة",
        "صبرك معنا في علاقتنا عن بُعد",
        "لطفك مع الجميع الذي يظهر من قصصك",
        "الطريقة التي تدعم بها أحلامي وطموحاتي من خلال محادثاتنا",
        "صوتك الجميل في كل رسالة صوتية أعيد تشغيلها مراراً وتكراراً",
        "كيف تجعلني أشعر بالحب من خلال الرسائل والصور",
        "ذكاؤك والطريقة التي ترى بها العالم",
        "الأشياء الصغيرة التي تفعلها لتظهر اهتمامك، حتى من بعيد",
        "كيف لا تستسلم أبداً، مهما كانت الصعوبات",
        "عيناك الجميلتان في كل صورة تأخذ أنفاسي",
        "الطريقة التي تجعل الرسائل العادية خاصة",
        "كيف تؤمن بي حتى عندما لا أؤمن بنفسي",
        "روح الدعابة لديك في محادثاتنا التي تفاجئني دائماً",
        "الطريقة التي ترد بها دائماً بعناية ودفء عندما أشارك مشاعري",
        "كيف تجعل المسافة تبدو أقل بُعداً مع كل رسالة",
        "شجاعتك في حب شخص لم تلتقي به شخصياً عبر القارات",
        "ببساطة لأنك أنتِ، وهذا أكثر من كافٍ"
      ]
    }
  };

  useEffect(() => {
    setShowHeart(true);
  }, []);

  const getRandomReason = () => {
    setIsAnimating(true);
    setTimeout(() => {
      let newReason;
      const reasonsLength = translations[language].reasons.length;
      do {
        newReason = Math.floor(Math.random() * reasonsLength);
      } while (newReason === currentReason && reasonsLength > 1);
      setCurrentReason(newReason);
      setIsAnimating(false);
    }, 300);
  };

  const cycleLanguage = () => {
    const languages = ['en', 'id', 'ar'];
    const currentIndex = languages.indexOf(language);
    const nextIndex = (currentIndex + 1) % languages.length;
    setLanguage(languages[nextIndex]);
  };

  const getLanguageLabel = () => {
    const labels = { en: 'EN', id: 'ID', ar: 'AR' };
    return labels[language];
  };

  const currentTranslation = translations[language];
  const isRTL = language === 'ar';

  if (showFinalMessage) {
    return <FinalMessage language={language} onBack={() => setShowFinalMessage(false)} />;
  }

  return (
    <div className={`min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 flex items-center justify-center p-4 overflow-hidden relative ${isRTL ? 'rtl' : 'ltr'}`}>
      {/* Language Toggle Button */}
      <button
        onClick={cycleLanguage}
        className="fixed top-4 right-4 z-20 bg-white/90 backdrop-blur-sm hover:bg-white text-gray-700 px-4 py-2 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2 font-semibold"
      >
        <Languages size={20} />
        {getLanguageLabel()}
      </button>

      {/* Floating hearts background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <Heart
            key={i}
            className="absolute text-pink-300 opacity-20 animate-float"
            size={Math.random() * 30 + 20}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 10 + 10}s`
            }}
          />
        ))}
      </div>

      <div className="max-w-2xl w-full relative z-10">
        {/* Header */}
        <div className={`text-center mb-8 transition-all duration-1000 ${showHeart ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
          <div className="flex items-center justify-center gap-3 mb-4">
            <Sparkles className="text-yellow-500" size={32} />
            <Heart className="text-red-500 animate-pulse" size={48} fill="currentColor" />
            <Sparkles className="text-yellow-500" size={32} />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 mb-2">
            {currentTranslation.title}
          </h1>
          <p className="text-gray-600 text-lg">
            {currentTranslation.subtitle}
          </p>
        </div>

        {/* Reason Card */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 mb-6 border-2 border-pink-200">
          <div className="text-center mb-6">
            <span className="inline-block bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-2 rounded-full text-sm font-semibold">
              {currentTranslation.reasonLabel} #{currentReason + 1} {currentTranslation.of} {currentTranslation.reasons.length}
            </span>
          </div>
          
          <div className={`transition-all duration-300 ${isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
            <p className="text-2xl md:text-3xl text-gray-800 leading-relaxed text-center font-medium">
              "{currentTranslation.reasons[currentReason]}"
            </p>
          </div>

          <div className="mt-8 flex justify-center">
            <button
              onClick={getRandomReason}
              className="group bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-3"
            >
              <RefreshCw className="group-hover:rotate-180 transition-transform duration-500" size={24} />
              {currentTranslation.button}
            </button>
          </div>

          <div className="mt-4 flex justify-center">
            <button
              onClick={() => setShowFinalMessage(true)}
              className="group bg-gradient-to-r from-red-500 to-pink-500 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2"
            >
              <Mail className="group-hover:scale-110 transition-transform duration-300" size={20} />
              {currentTranslation.finalButton}
            </button>
          </div>
        </div>

        {/* Footer message */}
        <div className="text-center">
          <p className="text-gray-700 text-lg font-medium">
            {currentTranslation.footer}
          </p>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(10deg);
          }
        }
        .animate-float {
          animation: float linear infinite;
        }
      `}</style>
    </div>
  );
}

// Final Message Component
function FinalMessage({ language, onBack }) {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowContent(true), 300);
  }, []);

  const messages = {
    en: {
      title: "What I Want to Tell You",
      message: `Even though we are separated by distance, it feels like you are always present in every corner of my day. There's a part of you that always sticks in my mind—the way you talk, laugh, even the little things that only you have. Sometimes I think, how can someone who isn't in front of my eyes still feel the closest?

Every night before I sleep, longing always comes, slowly but surely. Not a longing that makes me sad, but a longing that makes me grateful because I have someone as precious as you to miss. I always hope you're doing well over there, eating enough, resting enough, and remember that there's someone who always thinks about you here.

I believe in us. This distance is not a barrier, but proof that we can endure stronger than many people. We both learn patience, learn to trust, learn to appreciate the little things that others sometimes take for granted. And every time you say "I miss you", all the exhaustion of waiting feels completely paid off.

And until that day comes... the day when I can finally truly stand in front of you without distance, no longer through screens or voices. I want to be the one who comes directly, who comes to you with confident steps, just to say that all this longing has finally arrived. Someday, I will be where you are—not as an empty promise, but as a goal I truly want to achieve, because you are worth fighting for.`,
      signature: "I love you Lola ❤️",
      backButton: "← Back to Reasons"
    },
    id: {
      title: "Yang Ingin Kusampaikan",
      message: `Walaupun kita dipisahkan oleh jarak, rasanya kamu selalu hadir di setiap sudut hariku. Ada bagian dari dirimu yang selalu menempel di pikiranku—cara kamu ngomong, ketawa, sampai hal kecil yang cuma kamu yang punya. Kadang aku mikir, kok bisa ya seseorang yang nggak ada di depan mata tapi tetap kerasa paling dekat?

Setiap malam sebelum tidur, rindu itu selalu datang, pelan-pelan tapi pasti. Bukan rindu yang bikin sedih, tapi rindu yang justru bikin aku bersyukur karena aku punya seseorang seberharga kamu untuk dirindukan. Aku selalu berharap kamu baik-baik di sana, makan cukup, istirahat cukup, dan tetap inget kalau ada seseorang yang selalu mikirin kamu di sini.

Aku percaya sama kita. Jarak ini bukan halangan, tapi bukti kalau kita mampu bertahan lebih kuat dari banyak orang. Kita sama-sama belajar sabar, belajar percaya, belajar menghargai hal kecil yang kadang orang lain anggap sepele. Dan setiap kali kamu bilang "aku kangen", rasanya semua lelah nunggu itu terbayar lunas.

Dan sampai hari itu datang… hari dimana akhirnya aku bisa benar-benar berdiri di depan kamu tanpa jarak, bukan lagi lewat layar atau suara. Aku pengin jadi orang yang datang langsung, yang nyamperin kamu dengan langkah pasti, cuma buat bilang kalau semua rasa kangen ini akhirnya sampai juga. Suatu hari nanti, aku bakal ada di tempat kamu berada—bukan sebagai janji kosong, tapi sebagai tujuan yang beneran mau aku wujudkan, karena kamu layak untuk aku perjuangkan.`,
      signature: "Aku cinta kamu Lola ❤️",
      backButton: "← Kembali ke Alasan"
    },
    ar: {
      title: "ما أريد أن أخبرك به",
      message: `على الرغم من أننا منفصلون بالمسافة، أشعر أنك موجودة دائماً في كل ركن من يومي. هناك جزء منك يبقى عالقاً في ذهني دائماً - طريقة حديثك، ضحكتك، حتى الأشياء الصغيرة التي لا يملكها سواك. أحياناً أفكر، كيف يمكن لشخص ليس أمام عيني أن يظل الأقرب؟

كل ليلة قبل النوم، يأتي الشوق، ببطء لكن بثبات. ليس شوقاً يحزنني، بل شوق يجعلني ممتناً لأن لدي شخص ثمين مثلك لأشتاق إليه. أتمنى دائماً أن تكوني بخير هناك، تأكلين جيداً، تستريحين جيداً، وتتذكرين أن هناك من يفكر فيك دائماً هنا.

أؤمن بنا. هذه المسافة ليست عائقاً، بل دليل على أننا قادران على التحمل أقوى من كثيرين. نتعلم معاً الصبر، نتعلم الثقة، نتعلم تقدير الأشياء الصغيرة التي يعتبرها الآخرون أحياناً أمراً مفروغاً منه. وفي كل مرة تقولين "أشتاق إليك"، يبدو أن كل تعب الانتظار يُسدد بالكامل.

وحتى يأتي ذلك اليوم... اليوم الذي يمكنني فيه أخيراً الوقوف أمامك حقاً دون مسافة، لم يعد عبر الشاشات أو الأصوات. أريد أن أكون من يأتي مباشرة، من يأتي إليك بخطوات واثقة، فقط لأقول إن كل هذا الشوق قد وصل أخيراً. في يوم ما، سأكون حيث أنت - ليس كوعد فارغ، بل كهدف أريد حقاً تحقيقه، لأنك تستحقين النضال من أجلك.`,
      signature: "أحبك لولا ❤️",
      backButton: "→ العودة إلى الأسباب"
    }
  };

  const currentMessage = messages[language];
  const isRTL = language === 'ar';

  return (
    <div className={`min-h-screen bg-gradient-to-br from-red-50 via-pink-50 to-purple-50 flex items-center justify-center p-4 ${isRTL ? 'rtl' : 'ltr'}`}>
      <div className={`max-w-3xl w-full transition-all duration-1000 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 border-2 border-pink-200">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Heart className="text-red-500 animate-pulse" size={40} fill="currentColor" />
              <Mail className="text-pink-500" size={36} />
              <Heart className="text-red-500 animate-pulse" size={40} fill="currentColor" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-pink-500 to-purple-500">
              {currentMessage.title}
            </h1>
          </div>

          {/* Message */}
          <div className="prose prose-lg max-w-none mb-8">
            <p className="text-gray-800 leading-relaxed whitespace-pre-line text-justify">
              {currentMessage.message}
            </p>
          </div>

          {/* Signature */}
          <div className={`mb-8 ${isRTL ? 'text-left' : 'text-right'}`}>
            <p className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-500">
              {currentMessage.signature}
            </p>
          </div>

          {/* Back Button */}
          <div className="flex justify-center">
            <button
              onClick={onBack}
              className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              {currentMessage.backButton}
            </button>
          </div>
        </div>

        {/* Floating hearts */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(10)].map((_, i) => (
            <Heart
              key={i}
              className="absolute text-pink-300 opacity-20 animate-float"
              size={Math.random() * 30 + 20}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${Math.random() * 10 + 10}s`
              }}
            />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(10deg);
          }
        }
        .animate-float {
          animation: float linear infinite;
        }
      `}</style>
    </div>
  );
}