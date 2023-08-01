import React, { useState, useRef, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";

function App() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const home = useRef(null);
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const section4Ref = useRef(null);

  const handleSection1Click = () => {
    section1Ref.current.scrollIntoView({ behavior: "smooth" });
  };

  const handleSection2Click = () => {
    section2Ref.current.scrollIntoView({ behavior: "smooth" });
  };

  const handleSection3Click = () => {
    section3Ref.current.scrollIntoView({ behavior: "smooth" });
  };

  const handleSection4Click = () => {
    section4Ref.current.scrollIntoView({ behavior: "smooth" });
  };

  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <div className="header-top">
        <div className="inner-header">
          <div className="links">
            <a href="#home" onClick={handleBackToTop} className="link">
              דף הבית
            </a>
            <a
              href="#section1Ref"
              onClick={handleSection1Click}
              className="link"
            >
              המשרד
            </a>
            <a
              href="#section2Ref"
              onClick={handleSection2Click}
              className="link"
            >
              תחומי התמחות
            </a>
            <a
              href="#section3Ref"
              onClick={handleSection3Click}
              className="link"
            >
              מי אנחנו
            </a>
            <a
              href="#section4Ref"
              onClick={handleSection4Click}
              className="link"
            >
              צור קשר
            </a>
          </div>
          <div className="details">
            <div>
              <img className="icon" src="img/email.png" alt="email" />
              ran@le-law.co.il |
            </div>

            <div>
              <img className="icon" src="img/phone.png" alt="phone" />
              רן : 052-5690795 |
            </div>
            <div>
              <img className="icon" src="img/phone.png" alt="phone" />
              054-6334393 : חן
            </div>
          </div>
        </div>
        <img className="logo" src="./img/logo.png" alt="logo" />
      </div>

      <div className="banner">
        <img className="banner-img" src="img/banner2.png" alt="banner2" />
      </div>

      <div className="about" ref={section1Ref}>
        <div></div>
        <div>
          {" "}
          <div>
            <div className="office-headline">המשרד</div>
            <div className="office-para">
              משרד עורכי דין לוי-אלול, הינו משרד בוטיק ייחודי ודינאמי, המתמחה
              בקשת נושאים רחבה בתחומי המשפט האזרחי, המסחרי והנזיקי.
              <br />
              המשרד מעניק ללקוחותיו מענה מקיף ומקצועי, תוך ניתוח מעמיק של
              הסוגיות המשפטיות הרלוונטיות וכפועל יוצא מכך בונה ומתאים את
              האסטרטגיה המשפטית המתאימה ללקוח.
              <br /> המשרד, מציע ללקוחותיו ניסיון ובקיאות רב תחומית הכוללת בין
              היתר התמחות בתחומי דיני החברות, החוזים, הוצאה לפועל, אשרות שהייה,
              צוואות, נזקי גוף, תביעות פלת"ד ורשלנות רפואית. <br />
              בנוסף, משרדינו מתמחה בייצוג והופעה בפני הערכאות המשפטיות השונות,
              החל בסכסוכים בעלי אופי אזרחי-מסחרי וכלה בתביעות נזיקין מורכבות.
              <br /> משרדינו חרט על דגלו את ערכי המצוינות, הקפדה בלתי מתפשרת,
              חדשנות משפטית, יצירתיות וחשיבה מחוץ לקופסא, כל זאת על מנת להעניק
              את השירות המשפטי האיכותי והמקצועי ביותר, לכל אחד מלקוחות המשרד.
              משרדינו פועל ללא לאות עבור לקוחותיו, תוך שהוא מעניק להם יחס אישי
              וחם, קשוב לבעיותיהם ומקפיד לעדכנם באופן תכוף בכל הנוגע להתפתחויות
              בתיקים השונים.
            </div>
          </div>
        </div>
        <div></div>
      </div>

      <div className="carousel-sec" ref={section2Ref}>
        <div></div>
        <div>
          <div className="carousel-headline">תחומי התמחות</div>
          <div>
            <Carousel style={{ width: "60vw" }}>
              <Carousel.Item>
                <img
                  className="image_carousel"
                  src="img/company_coparation.jpeg"
                  alt="First slide"
                />
                <Carousel.Caption className="caption_back">
                  <h3 className="headline_carousel">חברות ותאגידים</h3>
                  <p className="para_carousel">
                    משרדינו מעניק את הליווי המשפטי הדרוש לחברות, החל ממועד הקמתן
                    וכלה במהלך פעילותן העסקית השוטפת. המשרד מודע לצרכים המיוחדים
                    המאפיינים את התחום העסקי, לרבות השוני המובנה, המבדיל כל חברה
                    וענף. המשרד מעניק את מלוא תשומת הלב הנדרשת ללקוח, זאת על
                    בסיס צרכיו הייחודיים, מתוך מטרה לאפשר לעסקו לצמוח בצורה
                    היעילה והבטוחה ביותר. משרדינו מתמחה בעריכת הסכמי מייסדים,
                    הקמה ופירוק של חברות, הסכמי חלוקת אופציות ומניות, עריכת
                    חוזים, מתן ייעוץ משפטי וליווי שוטף לכל צרכיו של הלקוח,
                    בזמינות ובמקצועיות הגבוהה ביותר.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="image_carousel"
                  src="./img/contract.png"
                  alt="Second slide"
                />

                <Carousel.Caption className="caption_back">
                  <h3 className="headline_carousel">חוזים והסכמים</h3>
                  <p className="para_carousel">
                    משרדינו מתמחה בעריכת חוזים והסכמים משפטיים שונים. משרדינו שם
                    לעצמו כמטרה, ללמוד את צרכיו של הלקוח ולהתאים להם את המסמך
                    המשפטי המתאים, באופן המגן על האינטרסים שלו בצורה השלמה
                    ביותר. משרדינו, מבין את המורכבות הכרוכה בעריכה וחתימה על
                    הסכמים מסחריים ומשכך שוקד בקפדנות על בניית המעטפת החוזית אשר
                    מטרתה להגן על הלקוח. כמוכן, אנו מבינים את העובדה כי לא פעם
                    התקשרויות חוזיות עתידות להגיע לכדי מחלוקת ולפיכך אנו פועלים
                    לאיתור הכשלים הפוטנציאלים מבעוד מועד ולמתן המענים הרלוונטיים
                    להם בגוף החוזה עצמו.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="image_carousel"
                  src="./img/hozah_lapoal.jpeg"
                  alt="Third slide"
                />

                <Carousel.Caption className="caption_back">
                  <h3 className="headline_carousel">הוצאה לפועל</h3>
                  <p className="para_carousel">
                    משרדינו מייצג הן זוכים והן חייבים בהליכי הוצאה לפועל.
                    במציאות העסקית דהיום במדינת ישראל, אנשים רבים נקלעים לעיתים
                    לתסבוכות כלכליות כאלה ואחרות. משרדינו, שם לעצמו מטרה, לאפשר
                    לאותם אנשים לצמצמם את הפגיעה בהם, באופן בו יוכלו לנהל שגרת
                    חיים תקינה ולשקם את מצבם הפיננסי. המשרד מעניק מגוון רחב של
                    שירותים בתחום ההוצאה לפועל כגון: בקשה להפטר (מחיקת חובות),
                    איחוד תיקים, ביטול צווים וסנקציות אישיות, גביית חובות, הפחתת
                    צווי תשלומים, ייצוג בהליכי גבייה, התנגדויות לביצוע שטרות
                    ותביעות לסכום קצוב.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="image_carousel"
                  src="img/inheritance.jpeg"
                  alt="Fourth slide"
                />
                <Carousel.Caption className="caption_back">
                  <h3 className="headline_carousel">צוואות וירושות</h3>
                  <p className="para_carousel">
                    בדומה לביטוח חיים, חשיבותה של צוואה טמונה בהיותה אמצעי אשר
                    נועד להבטיח כי רצונו של אדם ייצא מן הכוח אל הפועל, באופן
                    המאפשר לו להחליט ולקבוע כבר היום, כשהוא כשיר וצלול מה ייעשה
                    בעתיד, בנכסיו. משרדינו מעניק טיפול משפטי בכל הנוגע לעריכת
                    צוואות כדין תוך שמירה מלאה על רצונותיו של הלקוח, במטרה למנוע
                    פגמים אשר עלולים להוביל לבטלותה של הצוואה, הכל על מנת להוציא
                    אל הפועל את רצון המצווה. בנוסף, משרדינו מלווה את הליך הירושה
                    על כל שלביו השונים, לרבות בקשה לצו ירושה, צו קיום צוואה,
                    הגשת התנגדות לקיום צוואה וכל היוצא בזה.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="image_carousel"
                  src="img/job_aprove.jpg"
                  alt="Fifth slide"
                />
                <Carousel.Caption className="caption_back">
                  <h3 className="headline_carousel">אשרות שהייה ועבודה</h3>
                  <p className="para_carousel">
                    המשרד מתמחה בתחום משפט ההגירה, בקיא בנהלי משרד הפנים ורשות
                    האוכלוסין השונים ומצוי בקשר עם גורמי המקצוע הרלוונטיים.
                    המשרד מתמחה בקבלת כל אשרות הכניסה לישראל בצורה המהירה ביותר,
                    לרבות: אשרות שהייה, ויזות עבודה למומחים זרים ועוד. המשרד
                    מציע פתרונות יצירתיים וזאת על מנת להתגבר על הקשיים הרבים
                    שעלולים לצוץ במהלך ההליך הבירוקרטי הסבוך.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="image_carousel"
                  src="img/medical_negligence.png"
                  alt="First slide"
                />
                <Carousel.Caption className="caption_back">
                  <h3 className="headline_carousel">רשלנות רפואית</h3>
                  <p className="para_carousel">
                    משרדינו מתמחה בטיפול והגשת תביעות הנובעות ממקרי רשלנות
                    רפואית. אנו רואים שליחות רבה בייצוג מטופלים אשר נפגעו
                    מרשלנות רפואית, תוך שאנו מקפידים לספק ללקוחותינו את מלוא
                    המידע הרלוונטי להגשת תביעתם וסיכויי הצלחתה. בין היתר מתמחה
                    המשרד, בתביעות הנובעות מהתרשלות בשלל תחומי הרפואה השונים
                    כגון: רשלנות במהלך מעקב ההיריון, במהלך הלידה, איחורים באבחון
                    של מחלות ממאירות, רשלנות בניתוחים פלסטיים, רשלנות במתן
                    טיפולי שיניים ועוד. משרדינו מצוי בקשר עם מיטב המומחים
                    הרפואיים, המעניקים ליווי רפואי המשלים את הפן המשפטי בתביעה
                    ומגבש אותה לכדי תביעה מנצחת.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="image_carousel"
                  src="img/body_damage.jpeg"
                  alt="Seventh slide"
                />
                <Carousel.Caption className="caption_back">
                  <h3 className="headline_carousel">נזקי גוף</h3>
                  <p className="para_carousel">
                    משרדינו, מתמחה בהגשת תביעות אשר נגרמו כתוצאה מנזקי גוף, בין
                    היתר מנזקים שהתרחשו: במקום העבודה, במהלך פעילות גופנית,
                    כתוצאה מפציעות של בני נוער במסגרות לימודיות, בגני שעשועים,
                    במקומות פומביים ועוד. צוות המשרד, מלווה את התביעה החל משלב
                    איסוף המסמכים הרפואיים ולמידתם ועד לשלב הדיונים המשפטיים, כל
                    זאת על מנת למקסם את זכויותיו של הלקוח, אשר מגולמות בדמות:
                    פיצויים כספיים, אחוזי נכות, קצבאות, מענקים וכו'.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="image_carousel"
                  src="img/car_crash.avif"
                  alt="Eighth slide"
                />
                <Carousel.Caption className="caption_back">
                  <h3 className="headline_carousel">תאונות דרכים</h3>
                  <p className="para_carousel">
                    משרדינו מטפל בתביעות בגין נזקי גוף שנגרמו כתוצאה מתאונות
                    דרכים. לצערנו, תאונות דרכים מתרחשות באופן תדיר ומותירות
                    אנשים רבים להתמודד עם נזקים, מגבלות ונכויות קשות. במידה
                    ונפגעת בתאונת דרכים, אנו נלווה אותך באופן שוטף, החל מרגע
                    התאונה ונדריך אותך בדבר הפעולות אשר תידרש לבצע. אנו נעשה כל
                    שביכולתנו על מנת להילחם על זכויותיך ולהגדיל את הפיצוי המגיע
                    לך בצורה משמעותית.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
        <div></div>
      </div>

      <div className="about" ref={section3Ref}>
        <div></div>
        <div>
          <div className="office-headline">מי אנחנו</div>
          <div className="about-us-grid-column">
            <div className="about-us-grid-rows">
              <div>
                <img className="employee_img" src="img/ran.png" alt="ran" />
              </div>
              <div>
                <img className="employee_img" src="img/hen.png" alt="hen" />
              </div>
            </div>
            <div className="about-us-grid-rows">
              <div className="employee-para">
                עו"ד רן אלול- עו"ד אלול, בוגר תואר ראשון במשפטים (L.L.B) ותואר
                ראשון בממשל (B.A), עם התמחות בדיפלומטיה ואסטרטגיה, מטעם המרכז
                הבינתחומי הרצליה. עו"ד אלול, התמחה באחד המשרדים המובילים בארץ
                בתחומי: הביטוח, הנזיקין והרשלנות הרפואית. עו"ד אלול, עוסק במגוון
                רחב של תביעות נזיקין, תוך התמחות ברשלנות רפואית, נזקי גוף
                ותביעות על פי החוק לנפגעי תאונות דרכים (פלת"ד). עו"ד אלול, שולט
                במספר רב של שפות וביניהן: עברית, אנגלית, ערבית וספרדית.
              </div>
              <div className="employee-para">
                עו"ד חן לוי- עו"ד לוי, בוגר תואר ראשון (L.L.B) במשפטים, מטעם
                המסלול האקדמי, המכללה למנהל. עו"ד לוי, התמחה באחד המשרדים
                המובילים בארץ בתחומי המשפט האזרחי- מסחרי. עו"ד לוי עוסק במגוון
                תחומי המשפט האזרחי-מסחרי כגון: עריכת חוזים והסכמים, דיני חברות
                ותאגידים, ליטיגציה, עריכת צוואות וירושות, והנפקת אשרות שהייה
                ועבודה. עו"ד לוי בעל שליטה במספר שפות: עברית, אנגלית וערבית.
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </div>

      <div className="contact" ref={section4Ref}>
        <div className="contact-grid">
          <div className="contact-box">
            <div className="contact-headline">כתובתנו</div>
            <div className="contact-para">
              <img
                className="location-logo"
                src="./img/location.png"
                alt="location"
              />
              רחוב צור 4, הוד השרון
            </div>
          </div>
          <div>
            <img className="contact-logo" src="./img/logo.png" alt="logo" />
          </div>
          <div className="contact-box">
            <div className="contact-headline">פרטי התקשרות</div>
            <div className="contact-icons">
              <div>
                <img
                  className="contact-phone-email-logo"
                  src="img/email.png"
                  alt="email"
                />
                ran@le-law.co.il
              </div>

              <div>
                <img
                  className="contact-phone-email-logo"
                  src="img/phone.png"
                  alt="phone"
                />
                רן : 052-5690795
              </div>
              <div>
                <img
                  className="contact-phone-email-logo"
                  src="img/phone.png"
                  alt="phone"
                />
                חן : 054-6334393
              </div>
            </div>
          </div>
        </div>
      </div>
      {showButton && (
        <button className="floating-button" onClick={handleBackToTop}>
          ↑{" "}
        </button>
      )}
    </div>
  );
}

export default App;
