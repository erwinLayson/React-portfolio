import { Languages } from "../components/pages/Languages"

export function MyLanguages() {
    return (
        <>
            <section className="min-h-screen min-w-screen flex flex-col gap-10 bg-[var(--primary)] pt-[6rem] text-[var(--tertiary)] p-10">
                <Languages />
            </section>
        </>
    )
}