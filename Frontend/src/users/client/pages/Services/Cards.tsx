import { Link } from 'react-router-dom'
import { cards } from "./dataCards"

const Cards = () => {
  return (
    <>
    {cards.map ((card)=> (
        <div className="relative overflow-hidden transition duration-300  shadow-sm hover:scale-105 group hover:shadow-xl hover:border-primary">
          <div className="absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
            <div className="absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
              <div className="absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
                <div className="absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
                  <div className="relative p-5 bg-white rounded-sm">
                    <div className="flex flex-col mb-2 lg:items-center lg:flex-row">
                      <div className="flex items-center justify-center w-10 h-10 mb-4 mr-2 rounded-full bg-indigo-50 lg:mb-0 ">
                        {card.icon}
                      </div>
                        <h6 className="font-semibold leading-5 text-black">{card.name}</h6>
                    </div>
                    <p className="mb-2 text-sm text-black">
                    {card.description}
                    </p>
                    <Link
                      to={card.path}
                      aria-label=""
                      className="hover:text-primary inline-flex items-center text-sm font-semibold transition-colors duration-200 text-primary"
                    >
                      {card.link}
                    </Link>
                </div>
            </div>
        ))}
      </>
  )
}

export default Cards