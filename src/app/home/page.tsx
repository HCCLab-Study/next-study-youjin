import EnRecruitment from "./_components/introduction/EnRecruitment";
import Introduction from "./_components/introduction/IntroductionTitle";
import Recruitment from "./_components/introduction/Recruitment";
import ResearchField from "./_components/introduction/ResearchFiled";
import InstagramNews from "./_components/news/Instagram";
import News from "./_components/news/NewsTitle";

export default function Page() {

    return (
        <main className="flex flex-col">
            <Introduction />
            <div className="bg-white">
                <Recruitment />
                <ResearchField />
                <EnRecruitment />
            </div>
            <News />
            <div className="bg-custom-gray">
                <InstagramNews />
            </div>
        </main>
    )
}