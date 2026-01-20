import contacts from "../../data/contactData";

function PersonalAccount({ accountName, links, btnLabel, index}) {
  return (
    <li key={index} className="flex flex-col sm:flex-row gap-5 justify-between items-center w-full">
      <p className="font-semibold sm:text-lg text-shadow w-full text-center lg:text-start">{ accountName }</p>
      <a href={`${links}`} className="p-3 bg-blue-500 rounded-lg font-semibold w-full text-center hover:bg-blue-500/80 transition">{ btnLabel }</a>
    </li>
  )
}



export function Contacts() {
  return (
    <>
      <div id="contacts" className="min-h-screen w-full p-2 md:p-10 bg-[var(--primary)] text-[var(--tertiary)]">
        <section className="flex flex-col gap-10 p-5 rounded-lg">
          <h1 className="font-bold text-3xl text-shadow w-full text-center md:text-start">Contact Me</h1>
          <article>
            <div className="p-5 rounded-lg shadow-green-500 shadow-lg font-bold">
              <form action="" className="flex flex-col gap-5">
                <div className="flex flex-col gap-5 text-lg">
                  <label htmlFor="senderEmail">Enter your email</label>
                  <input type="text" id="senderEmail" className="bg-white text-black rounded-lg p-2 focus:outline-green-500 border-none font-semibold"/>
                </div>

                <div className="flex flex-col gap-5 text-lg">
                  <label htmlFor="senderComment">Enter your comment </label>
                  <textarea type="text" id="senderComment" className="bg-white text-black rounded-lg p-2 focus:outline-green-500 border-none font-semibold"/>
                </div>

                <div className="flex w-full justify-center items-center">
                  <button type="submit" className="text-lg font-bold p-3 hover:bg-green-500 bg-green-600 rounded-lg w-full cursor-pointer">Submit</button>
                </div>
              </form>
            </div>
          </article>

          <article className="p-5 shadow-lg shadow-green-500 rounded-lg flex flex-col gap-10">
            <h1 className="text-3xl text-shadow font-bold w-full text-center md:text-start">Personal Account</h1>
            <ul className="flex flex-col gap-10 p-5 shadow-lg shadow-green-500 rounded-lg">
              {contacts.map((contactInfo, index) => (
                <PersonalAccount
                  accountName={contactInfo.accName}
                  links={contactInfo.links}
                  btnLabel={contactInfo.btnLabel}
                  key={index}
                />
              ))}
            </ul>
          </article>
        </section>
      </div>
    </>
  )
}