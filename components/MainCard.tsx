'uce client'
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import Image from "next/image"
import { Button } from "./ui/button"
import Link from "next/link"

  type Project = {
    id: number
  title: string
  description: string
    image: string 
  technologies: string[]
  url: string
}

const MainCard = ({title, description, image, technologies, url}:Project) => {
  return (
    <Card className="dark:bg-[#0F172A] transition-all ease-in-out duration-150 hover:shadow-lg hover:scale-105">
          <div className="grid place-items-center">
          <Image
              src={image}
              alt={title}
              width={450}
                  height={300}
                  className="w-[90%]  object-cover rounded-lg"
          />
          </div>
          <CardTitle className="text-lg md:text-xl lg:text-2xl poppins-semibold text-primary px-4 ">
                {title}
          </CardTitle>
          <CardDescription className=" px-4 " >
              <p className="text-sm md:text-base lg:text-lg text-gray-600 dark:text-gray-300">
              {description}
              </p>
              <div className="mt-2 bg-gray-200 rounded-lg p-2 dark:bg-gray-800">
                  <span className=" poppins-medium text-lg lg:text-xl dark:text-gray-200 text-gray-600 ">Technologies:</span>
                  <ul className="flex flex-wrap gap-2 mt-1">
                    {technologies.map((tech, index) => (
                        <li
                        key={index}
                        className="text-sm md:text-base lg:text-lg text-gray-500 dark:text-gray-400 flex items-center"
                        >
                        {tech}
                        {index !== technologies.length - 1 && (
                            <span className="block ml-2">-</span>  
                        )}
                        </li>
                    ))}
                    </ul>

              </div>
          </CardDescription>
    <CardFooter>
              <Button asChild className="w-full mt-4">
                  <Link href={url} target="_blank" rel="noopener noreferrer">
                      View Project
                  </Link>
        </Button>
    </CardFooter>
    </Card>
  )
}

export default MainCard