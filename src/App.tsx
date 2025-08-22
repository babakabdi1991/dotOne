import Button from "./_common/components/Buttton";
import DescriptionCard from "./_common/components/DescriptionCard";
import InfoBanner from "./_common/components/InfoBanner";
import Input from "./_common/components/Input";
import LabelCard from "./_common/components/LabelCard";
import Selector from "./_common/components/Selector";
import Separator from "./_common/components/Separator";
import TextBanner from "./_common/components/TextBanner";
import { SAMPLE_TEXTS } from "./constants";
import ReCAPTCHA from "react-google-recaptcha";

function App() {
  return (
    <>
      <main>
        <section
          className=" relative min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center mb-[6.5rem]"
          style={{ backgroundImage: "url(/images/main-background.jpg)" }}
        >
          <header className="absolute top-[1.4rem] right-[5.4rem] left-[5.4rem] bg-white/30 px-[5rem] py-[1rem] mx-[5rem] text-black p-4 rounded-[2rem]">
            <nav className="flex justify-between items-center">
              <img src="/public/icons/logo.svg" alt="icon" />
              <ul className="flex justify-between items-center gap-[5rem] text-[1.4rem]">
                <li>درباره ما</li>
                <li>وبلاگ</li>
                <li>معرفی شرکت ها</li>
                <li>تماس با ما</li>
                <li>موقعیت شغلی</li>
              </ul>
              <Selector />
            </nav>
          </header>
          <div className="text-center">
            <img src="/icons/play.svg" alt="Play icon" className="w-30 h-30" />
          </div>
        </section>
        <section
          id="description"
          className="px-[1rem] max-w-[140rem] mb-[8rem] m-auto"
        >
          <div className="flex gap-[10rem]  mb-[6rem]">
            <h3
              className="text-[3rem] font-weight-600"
              style={{ whiteSpace: "nowrap" }}
            >
              گروه ارزش <br />
              افرین وان
            </h3>
            <p className="text-[1.4rem] text-justify">
              وان یک گروه اقتصادی ارزش افرین است(آوان) به واسطه سرمایه گذاری
              هوشمندانه و ساماندهی خردمندانه، زیرساخت های لازم برای آبادانی و
              سودرسانی هماگانی را فراهم می آورد، تا کسانی که پویا و کوشها هستند،
              میجال زایش و رویش بیابند. گروه ارزش آفرین وان یک سازمان دوراندیش
              است که با شعار آسایش برای همگان نقش محوردی در زمانه های کلیدی
              مانند حمل و نقل، پولی-مالی، سرمایه گذاری، کارآفرینی، توسعه تجارت
              بین المللی، رسانه، فناوری و ارتباطات ایفا خواهد نمود
            </p>
          </div>
          <div className="flex justify-center items-center pt-[4rem] pb-[4rem] px-[2.5rem] rounded-[2rem] bg-[#f5f5f5] ">
            <p className="text-center text-[1.5rem]">
              ارزندگی ، قطب نمای ما در وان است و هر فعالیتی به سمت ارزش آفرینی و
              افزودن ارزشی به جهان امروز، چرا که باور داریم:
              <br />
              فردا فرزند امروز است
            </p>
          </div>
        </section>
        <section className="relative pb-[11rem] ">
          <div className="relative px-[1rem] max-w-[140rem] m-auto z-10 ">
            <Separator
              title="One Group"
              description="دسته بندی شرکت ها"
              sentence="جمله کوتاه یا عبارت"
            />
            <div className="grid grid-cols-5 gap-[2rem]">
              {SAMPLE_TEXTS.map((text, index) => (
                <LabelCard key={`text-${index}`} title={text} />
              ))}
            </div>
          </div>
          <div
            className="absolute bg-cover bg-center left-0 bottom-0 top-0 w-[50rem] z-0 pointer-events-none"
            style={{
              backgroundImage: "url(/public/images/BG-Company.jpg)",
              opacity: 0.5,
            }}
          ></div>
        </section>
        <section className="px-[1rem] max-w-[140rem] mb-[8rem] m-auto">
          <Separator
            title="One Group"
            description="وبلاگ"
            sentence="جمله کوتاه یا تایتل"
          />
          <div className="flex gap-[2.4rem] mb-[2.4rem]">
            <TextBanner />
            <TextBanner isDarkMode={false} />
          </div>
          <div className="flex gap-[2.4rem]">
            <InfoBanner img="/images/Banner1.png" />
            <InfoBanner img="/images/Banner2.png" />
            <InfoBanner img="/images/Banner1.png" />
          </div>
        </section>
        <section className="px-[1rem] max-w-[140rem] mb-[8rem] m-auto">
          <div className="flex gap-[5rem]" style={{ height: "750px" }}>
            <img src="/icons/Tower.svg" alt="Tower Icon" className="w-90" />
            <div
              className="w-full bg-[#F5F5F5] rounded-[2.4rem] p-[4rem]"
              style={{ direction: "rtl" }}
            >
              <div
                className="custom-scrollbar p-[2rem]"
                style={{ height: "100%" }}
              >
                <Separator
                  title="one group"
                  description="معرفی شرکت ها"
                  sentence="ترابری"
                  isLow={true}
                />
                <div className="flex gap-[2.4rem] mb-[4rem]">
                  <DescriptionCard />
                  <DescriptionCard />
                  <DescriptionCard />
                </div>
                <Separator
                  title="one group"
                  description="معرفی شرکت ها"
                  sentence="مالی اعتباری"
                  isLow={true}
                />
                <div className="flex gap-[2.4rem] mb-[4rem]">
                  <DescriptionCard />
                  <DescriptionCard />
                  <DescriptionCard />
                </div>
                <Separator
                  title="one group"
                  description="معرفی شرکت ها"
                  sentence="تست"
                  isLow={true}
                />
                <div className="flex gap-[2.4rem]">
                  <DescriptionCard />
                  <DescriptionCard />
                  <DescriptionCard />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="px-[1rem] max-w-[140rem] mb-[8rem] m-auto">
          <Separator
            title="one group"
            description="تماس با ما"
            sentence="با ما در تماس باشید"
          />
          <div className="flex">
            <div className="w-full bg-[#F5F5F5] rounded-[2.4rem] p-[4rem]">
              <div className="flex gap-[1.5rem] mb-[2rem]">
                <Input label="نام/نام شرکت:" placeholder="نام" />
                <Input label="دسته بندی:" placeholder="نام خود را وارد کنید" />
              </div>
              <div className="flex gap-[1.5rem] mb-[2rem]">
                <Input label="شماره تماس:" placeholder="شماره تماس" />
                <Input label="ایمیل:" placeholder="ایمیل" />
              </div>
              <div className="mb-[5rem]">
                <Input
                  isTextArea={true}
                  rows={4}
                  label="درخواست: "
                  placeholder="درخواست خود را بنویسید"
                />
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <ReCAPTCHA
                    sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
                  />
                </div>
                <Button title="ارسال" />
              </div>
            </div>
            <div className="w-full">
              <img
                src="/images/Address.svg"
                alt="Address"
                className="w-2/3 m-auto"
              />
            </div>
          </div>
          <div className="relative">
            <div
              className="bg-cover"
              style={{
                backgroundImage: "url(/icons/BG-Form.svg)",
                opacity: 0.1,
                height: "300px",
              }}
            ></div>
            <div className="flex gap-[1rem] absolute left-0 top-0">
              <div
                className=" bg-[#f5f5f5] flex justify-center items-center"
                style={{ borderRadius: "50%" }}
              >
                <img
                  src="/icons/XLogo.svg"
                  alt="X logo"
                  className="w-16 h-16"
                />
              </div>
              <div
                className=" bg-[#f5f5f5] flex justify-center items-center"
                style={{ borderRadius: "50%" }}
              >
                <img
                  src="/icons/envelope.svg"
                  alt="X logo"
                  className="w-16 h-16"
                />
              </div>
              <div
                className=" bg-[#f5f5f5] flex justify-center items-center"
                style={{ borderRadius: "50%" }}
              >
                <img
                  src="/icons/phone.svg"
                  alt="X logo"
                  className="w-16 h-16"
                />
              </div>
              <div
                className=" bg-[#f5f5f5] flex justify-center items-center"
                style={{ borderRadius: "50%" }}
              >
                <img src="/icons/link.svg" alt="X logo" className="w-16 h-16" />
              </div>
            </div>
          </div>
        </section>
        <section className="px-[1rem] max-w-[140rem] mb-[8rem] m-auto">
          <div
            style={{
              opacity: 1,
              marginTop: "-15rem",
              marginBottom: "6rem",
            }}
          >
            <img
              src="/icons/logo.svg"
              alt="Address"
              className="w-50 h-50 m-auto"
            />
          </div>
          <div className="flex justify-around items-center mb-[6rem]">
            <div className="flex flex-col gap-[2rem]">
              <img
                src="/icons/call-calling.svg"
                alt="mail"
                className="w-18 h-18 m-auto"
              />
              <p className="text-[1.6rem] opacity-80">021-4102124</p>
            </div>
            <div className="flex flex-col gap-[2rem]">
              <img
                src="/icons/location.svg"
                alt="location"
                className="w-18 h-18 m-auto"
              />
              <p className="text-[1.6rem] opacity-80">
                تهران، جهان کودک، برج دات وان
              </p>
            </div>
            <div className="flex flex-col gap-[2rem]">
              <img
                src="/icons/sms.svg"
                alt="mail"
                className="w-18 h-18 m-auto"
              />
              <p className="text-[1.6rem] opacity-80">test@gmail.com</p>
            </div>
          </div>
          <div className="flex justify-around ">
            <div className="flex flex-col gap-[1rem]">
              <h3
                className="text-[1.4rem] text-w opacity-80"
                style={{ fontWeight: "600" }}
              >
                دسترسی سریع
              </h3>
              <p className="text-[1.4rem] opacity-80">تماس با ما</p>
              <p className="text-[1.4rem] opacity-80">درباره ما</p>
              <p className="text-[1.4rem] opacity-80">شرکت ها</p>
              <p className="text-[1.4rem] opacity-80">استخدام</p>
              <p className="text-[1.4rem] opacity-80">اخبار</p>
            </div>
            <div className="flex flex-col gap-[1rem]">
              <h3
                className="text-[1.4rem] text-w opacity-80"
                style={{ fontWeight: "600" }}
              >
                لینک ها
              </h3>
              <p className="text-[1.4rem] opacity-80">www.link.com</p>
              <p className="text-[1.4rem] opacity-80">www.link.com</p>
              <p className="text-[1.4rem] opacity-80">www.link.com</p>
              <p className="text-[1.4rem] opacity-80">www.link.com</p>
              <p className="text-[1.4rem] opacity-80">www.link.com</p>
            </div>
            <div className="flex flex-col gap-[1rem]">
              <h3
                className="text-[1.4rem] text-w opacity-80"
                style={{ fontWeight: "600" }}
              >
                لینک ها
              </h3>
              <p className="text-[1.4rem] opacity-80">www.link.com</p>
              <p className="text-[1.4rem] opacity-80">www.link.com</p>
              <p className="text-[1.4rem] opacity-80">www.link.com</p>
              <p className="text-[1.4rem] opacity-80">www.link.com</p>
              <p className="text-[1.4rem] opacity-80">www.link.com</p>
            </div>
            <div className="flex flex-col gap-[1rem]">
              <h3
                className="text-[1.4rem] text-w"
                style={{ fontWeight: "600" }}
              >
                لینک ها
              </h3>
              <p className="text-[1.4rem]">www.link.com</p>
              <p className="text-[1.4rem]">www.link.com</p>
              <p className="text-[1.4rem]">www.link.com</p>
              <p className="text-[1.4rem]">www.link.com</p>
              <p className="text-[1.4rem]">www.link.com</p>
            </div>
          </div>
        </section>
      </main>
      <footer className="px-[5rem] py-[4rem]">
        <div className="flex items-center">
          <div
            className="w-full"
            style={{ borderBottom: "2px solid black", opacity: "0.6" }}
          ></div>
          <p
            className="text-black opacity-60 w-full text-[1.4rem]"
            style={{ textAlign: "center" }}
          >
            هر واژه، هر تصویر، هر پیوند متعلق به گروه ارزش آفرینی وان است.
          </p>
          <div
            className="w-full"
            style={{ borderBottom: "2px solid black", opacity: "0.6" }}
          ></div>
        </div>
      </footer>
    </>
  );
}

export default App;
