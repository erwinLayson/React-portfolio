import {SiHtml5, SiJavascript, SiPhp, SiCss3, SiNodedotjs} from "react-icons/si"

export function Languages() {
    return (
        <>
        <h1 className="text-3xl font-bold w-full text-center md:text-start">Languages</h1>
        <article className="w-full flex flex-col md:flex-row gap-10">
            <article className="flex flex-col shadow-lg shadow-green-500 p-10 rounded-lg gap-10 w-full">
              <ul className="list-none text-lg flex flex-col gap-5 text-xl">
                <li className="flex gap-3 justify-start items-center text-[#777BB4]"><SiPhp/> PHP</li>
                <li className="flex gap-3 justify-start items-center text-[#E34F26]"><SiHtml5/> HTML</li>
                <li className="flex gap-3 justify-start items-center text-[#F7DF1E]"><SiJavascript/> JavaScript</li>
                <li className="flex gap-3 justify-start items-center text-[#1572B6]"><SiCss3/> CSS</li>
                <li className="flex gap-3 justify-start items-center text-[#339933]"><SiNodedotjs/> NODE</li>
              </ul>
            </article>

            <article className="flex flex-col gap-10 shadow-lg shadow-green-500 p-10 rounded-lg">
              <h1 className="text-3xl w-full font-bold text-center md:text-start text-shadow">Main Tech</h1>
              <span className="text-2xl font-bold flex gap-5 justify-start items-center text-[#F7DF1E]"><SiJavascript/> JavaScript</span>
            </article>
        </article>
        </>
    )
}