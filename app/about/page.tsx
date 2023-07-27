import Image from "next/image"

export default function Page() {
    return(
        <div className="text-center">
            <h1 className="text-3xl font-bold mb-6">Sobre o projeto</h1>
            <p className="mb-8 max-w-lg mx-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio possimus numquam perspiciatis at quidem eveniet maiores non, incidunt deserunt illum in pariatur, consequatur ratione sapiente aperiam ea est, neque suscipit.</p>
            <Image
                className="mx-auto"
                src="/charmander.png"
                width={300}
                height={300}
                alt="Charmander" 
            />
        </div>

    )
}