import { AboutMeContent, SkillSummary } from "../components/pages/About"

export function AboutMe() {
    return (
    <>
    <main className="pt-[6rem] md:pt-10 flex flex-col min-h-screen min-w-screen bg-[var(--primary)] text-[var(--tertiary)] p-10 gap-10">    
        <AboutMeContent />
        <SkillSummary />
    </main>
    </>
    )
}