import React, {useContext} from "react";
import {Link} from "react-router-dom";
import Hero from "../components/Hero";
import heroVideo from "../assets/shum-video.mp4";

import jetProfile from "../assets/jet_profile.png";
import shauntProfile from "../assets/shaunt_profile.png";
import jasonProfile from "../assets/jason_profile.png";
import emraanProfile from "../assets/emran_profile.PNG";
import liplowProfile from "../assets/liplow_profile.png";
import bdshawProfile from "../assets/bshaw_profile.png";
import thomasProfile from "../assets/thomas_profile.png";
import tymProfile from "../assets/tybam_profile.jpg";
import marloProfile from "../assets/marlo_profile.jpg";

import {
    AnnotationIcon,
    ChatAlt2Icon,
    InboxIcon,
    QuestionMarkCircleIcon,
    UsersIcon,
} from "@heroicons/react/outline";

import {ProductContext} from "../context/products";

const features = [
    {
        name: "Step 1",
        description:
            "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
        icon: UsersIcon,
    },
    {
        name: "Step 2",
        description:
            "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
        icon: UsersIcon,
    },
    {
        name: "Step 3",
        description:
            "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
        icon: UsersIcon,
    },
    {
        name: "Step 4",
        description:
            "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
        icon: UsersIcon,
    },

];
const metrics = [
    {
        id: 1,
        stat: "8K+",
        emphasis: "Companies",
        rest: "use laoreet amet lacus nibh integer quis.",
    },
    {
        id: 2,
        stat: "25K+",
        emphasis: "Countries around the globe",
        rest: "lacus nibh integer quis.",
    },
    {
        id: 3,
        stat: "98%",
        emphasis: "Customer satisfaction",
        rest: "laoreet amet lacus nibh integer quis.",
    },
    {
        id: 4,
        stat: "12M+",
        emphasis: "Issues resolved",
        rest: "lacus nibh integer quis.",
    },
];

const Home = () => {

    const roasterData = [
        {
            Name: "J-E-T",
            Role: "Founder/Engineer/Producer",
            NameBlock: "J-E-T",
            Bio: "Jet Ryan is the Founder, lead engineer, and lead producer for Rankine Recordz. In early 2018, Jet began developing the idea of the company and learned the ins and outs of producing beats. In the years that have followed, Jet has established a vision for the organization in addition to signing an array of talented artists and producers. Jet envisions Rankine Recordz becoming a strong label that promotes unity, hard work, and encouragement of artistic expression.",
            Instagram: "jetryan127",
            Twitter: "@jetryan127",
            Spotify: "https://open.spotify.com/artist/32EOBO43PlyIV6xrvtkUJX",
            Snapchat: "N/A",
            Email: "rankinerecordz@gmail.com",
            profileImage: jetProfile,
        },
        {
            Name: "LiPlow",
            Role: "Artist/Marketing",
            NameBlock: "LI\nPLOW",
            Bio: "LiPlow is one of Rankine’s swiss army knives used to work on different aspects of the organization. In addition to working on his own music, LiPlow serves as a consultant to the writing of other artists in the label, helps run marketing, and coordinates group efforts in music. Born in Austin, Texas, LiPlow claims both Texas and Northern Virginia as the places he knows well and it is reflected in his music. Musically, LiPlow makes work that predominantly tells a narrative that is supported through metaphors and situational hypotheticals. “I enjoy the process of creating an album that starts off from one perspective at the beginning to a completely different tone in the end.” LiPlow says. “I want my albums to reflect the room for growth and self-actualization.”",
            Instagram: "Liplow45",
            Twitter: "",
            Spotify: "https://open.spotify.com/artist/1AF0CRuK4MLYTVezaVCTLk",
            Snapchat: "N/A",
            Email: "matthewlipovski@gmail.com",
            profileImage: liplowProfile,
        },
        {
            Name: "$heist",
            Role: "Artist/Producer",
            NameBlock: "$HEIST",
            Bio: '$heist is an artist who brings an "emo trap vibe" to the label. Not only is $heist one of Rankine’s artists, but participating in the production side of Rankine Recordz has become the latest skill that the 22-year-old has developed. $heist also engages in promoting on social media and helping with other music related business. "I believe the best music qualities I posess are the creative melodies that I make as well as the energy that I can bring on any song.',
            Instagram: "shaunt5231",
            Twitter: "shaunt5231",
            Spotify: "https://open.spotify.com/artist/1IFQ0czeWy42a1mVobaVCz",
            Snapchat: "sheist98",
            Email: "shaunt5231@gmail.com",
            profileImage: shauntProfile,
        },
        {
            Name: "Jason",
            Role: "Media Creator",
            NameBlock: "JASON",
            Bio: "Jason Lux is part of the creative art and promotional aspect of Rankine Recordz. He makes the cover art and promotional materials for Rankine artists so that they get the recognition thier music deserves. Another contribution he adds to Rankine is leveraging his business degree from JMU to help the record label grow.",
            Instagram: "Jsnlx",
            Twitter: "Jsnlx",
            Spotify: "N/A",
            Snapchat: "Luxjason",
            Email: "luxjason09@gmail.com",
            profileImage: jasonProfile,
        },
        {
            Name: "Emran",
            Role: "Artsit",
            NameBlock: "PrincEmran",
            Bio: "PrincErman is one of Rankine Recordz youngest and most driven artists, his flow and delivery are his trademarks.",
            Instagram: "princemran_",
            Twitter: "",
            Spotify: "https://open.spotify.com/artist/1WkQT9u0ks2KxYAAHJBsOT",
            Snapchat: "",
            Email: "emranalwan1@gmail.com",
            profileImage: emraanProfile,
        },
        {
            Name: "Sludge",
            Role: "Artist",
            "Name Block": "SLUDGE",
            Bio: 'Sludge is one of the most consistent artists in Rankine Recordz in terms of style and delivery. Since first appearing on LiPlow\'s debut single Friday Night, Sludge has found his role in the label as an artist that specializes in energy and aggresive lyrics. "I try not to overthink the type of verses I make, because then it takes away from the energy and excitement in my verses" Sludge says. "$heist is great at making deep melodic tracks, LiPlow can develop clever punch lines, and I think I speciailize in bringing an ignorant energy that can elevate a song to a level that no man woman or child has ever seen the likes of before.',
            Instagram: "longlivesamwade",
            Twitter: "longlivesamwade",
            Spotify: "https://open.spotify.com/artist/32EOBO43PlyIV6xrvtkUJX",
            Snapchat: "N/A",
            Email: "sam.wade7319@gmail.com",
            profileImage: liplowProfile,
        },
        {
            Name: "Dom",
            Role: "Artist",
            NameBlock: "JUST DOM",
            Bio: "Just Dom is one of Rankine Recordz most melodic artists. Just Dom has taken inspiration from Chris Brown, Justin Beiber, and Drake. He has the talent and capibility to make beautiful songs about love and heartbreak, but also has a knack for making songs that can be played at the club at volume levels unimaginable.",
            Instagram: "dom_difalco21",
            Twitter: "N/A",
            Spotify: "N/A",
            Snapchat: "N/A",
            Email: "domdif60@gmail.com",
            profileImage: jetProfile,
        },
        {
            Name: "Brandon",
            Role: "Producer/Engineer",
            NameBlock: "BSHAW",
            Bio: "Bshaw joined Rankine Recordz as a producer, and since then his envolvement and influence in the direction and talent pool of the label have be priceless. He has picked up many talents since joining the label, one of which is vocal engineering. He has also been named the CEPO and CFO for Rankine Recordz.",
            Instagram: "bshaw1996",
            Twitter: "N/A",
            Spotify: "N/A",
            Snapchat: "N/A",
            Email: "bshaw19@vt.edu",
            profileImage: bdshawProfile,
        },
        {
            Name: "Yung Pops",
            Role: "Artist",
            NameBlock: "YUNG\nPOPS",
            Bio: 'Yung Pops is an artist that leads Rankine Recordz "Turn up" style music. He has the voice to sing and rap and often does both. He is one of the biggest collaboartive artists and has pushed the Florida sound into the label.',
            Instagram: "904_key",
            Twitter: "N/A",
            Spotify: "https://open.spotify.com/artist/6ktbEejuEpfu3UJNzuC0q5",
            Snapchat: "N/A",
            Email: "Mfogle24@yahoo.com",
            profileImage: jetProfile,
        },
        {
            Name: "Thomas",
            Role: "Promoter",
            NameBlock: "THOMAS",
            Bio: "Thomas hates the Patriots and thinks Kanye is overrated. (Bastard) . He knows country music sucks and that Marvel movies are inferior to the Dark Knight Trilogy. According to allegations on Twitter his parents hand him everything and he contributes nothing to the SU community.",
            Instagram: "tomrahme9",
            Twitter: "N/A",
            Spotify: "N/A",
            Snapchat: "N/A",
            Email: "trahme14@gmail.com",
            profileImage: thomasProfile,
        },
        {
            Name: "Ty Bam",
            Role: "Artist",
            NameBlock: "TY\nBAM",
            Bio: "Ty Bam has worked with Rankine Recordz since its founding. He is an artist with a style and flow unmatched by anyone in the industry, because of his uniqueness and years of practice in music he has not had a problem finding his lane.",
            Instagram: "tybammm",
            Twitter: "N/A",
            Spotify: "https://open.spotify.com/artist/44jSFv7TTpeMTiA7nQsPUR",
            Snapchat: "N/A",
            Email: "tyreek.middleton@yahoo.com",
            profileImage: tymProfile,
        },
        {
            Name: "Marlo",
            Role: "Artist",
            NameBlock: "MARLO",
            Bio: "Krazy Baby Marlo is one of Rankine Recordz catalysts of collaboration. He has worked with Rankine Recordz since its founding. He is always in search of the next wave. From finding and connecting with new artists, to meeting with popular podcasters, to even working with people well known in the industry like Kino and Lex Luger.",
            Instagram: "myguykrazy",
            Twitter: "N/A",
            Spotify: "https://open.spotify.com/artist/0E89ywO8zXcdCYPlcVVnqm",
            Snapchat: "N/A",
            Email: "demandthasupply@gmail.com",
            profileImage: marloProfile,
        },
        {
            Name: "Jules",
            Role: "Artist",
            NameBlock: "JULES",
            Bio: "a short 50 word bio",
            Instagram: "N/A",
            Twitter: "N/A",
            Spotify: "N/A",
            Snapchat: "N/A",
            Email: "N/A",
            profileImage: jetProfile,
        },
        {
            Name: "Munim",
            Role: "Chief Creative Officer",
            NameBlock: "MUNIM",
            Bio: "Munim is another multitool for Rankine Recordz. He transfers between wearing the hat of a producer, a graphic designer, and a Creative Director.",
            Instagram: "N/A",
            Twitter: "N/A",
            Spotify: "N/A",
            Snapchat: "N/A",
            Email: "munim.rah123456@gmail.com",
            profileImage: jetProfile,
        },
    ];


    return (
        <div className="bg-white">
            {/* Hero section */}
            <div className="">
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100"/>
                <div className="">
                    <div className="relative shadow-xl sm:overflow-hidden">
                        <div className="absolute inset-0">
                            {/* <img
                  className="h-full w-full object-cover"
                  src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2830&q=80&sat=-100"
                  alt="People working on laptops"
                /> */}

                            <video className="h-full w-full object-cover" loop autoPlay muted>
                                <source src={heroVideo} type="video/mp4"/>
                            </video>
                            <div
                                className="absolute inset-0 bg-gradient-to-r from-purple-800 to-indigo-700 mix-blend-multiply"/>
                        </div>
                        <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                            <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                                <span className="block text-white">RANKIN RECORDS</span>
                                <span className="block text-indigo-400">
                  YOUNG. TALENTED. GROWING.
                </span>
                            </h1>

                            <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
                                <div
                                    className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5">
                                    <a
                                        href="#"
                                        className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-indigo-700 bg-white hover:bg-indigo-50 sm:px-8"
                                    >
                                        Get started
                                    </a>
                                    <a
                                        href="#"
                                        className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-500 bg-opacity-60 hover:bg-opacity-70 sm:px-8"
                                    >
                                        Live demo
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Alternating Feature Sections */}
            <div className="relative overflow-hidden" id="roasterSection">
                <div
                    aria-hidden="true"
                    className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-gray-100"
                />
                <div className="relative">
                    <div className="lg:max-w-full lg:px-8 lg:grid lg:grid-cols-1 lg:grid-flow-col-dense lg:gap-24">
                        <div className="lg:mx-24 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
                            <div>
                                <div>
                  <span
                      className="h-12 w-12 rounded-md flex items-center justify-center bg-gradient-to-r from-purple-600 to-indigo-600">
                    <InboxIcon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                    />
                  </span>
                                </div>
                                <div className="mt-6">
                                    <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                                        ROASTER
                                    </h2>
                                    <p className="mt-4 text-lg text-gray-500">
                                        A small description of the team and the values of our
                                        members.
                                    </p>
                                </div>

                                <div className="relative">
                                    <div className="relative">
                                        <div
                                            className="mt-12 mx-auto max-w-md px-4 grid lg:grid-cols-5 gap-8 sm:max-w-lg sm:px-6 lg:px-8 lg:max-w-7xl">
                                            {roasterData.map((roaster) => (
                                                <div
                                                    key={roaster.Email}
                                                    className="flex flex-col rounded-sm shadow-sm overflow-hidden transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110 ..."
                                                >
                                                    <div className="flex-shrink-0">
                                                        <img
                                                            className="h-48 w-full object-cover"
                                                            src={roaster.profileImage}
                                                            alt=""
                                                        />
                                                    </div>
                                                    <div
                                                        className="flex-1 bg-gray-700 p-6 flex flex-col justify-between ">
                                                        <div className="flex-1">
                                                            <p className="text-sm font-medium text-white">
                                                                <Link to="/" className="hover:underline">
                                                                    {roaster.Name}
                                                                </Link>
                                                            </p>
                                                            <Link to="/" className="block mt-2">
                                                                <p className="text-xl font-semibold text-white">
                                                                    {roaster.Role}
                                                                </p>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            {/* Alternating Feature Sections */}
            <div className="relative overflow-hidden" id="productsSection">
                <div
                    aria-hidden="true"
                    className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-gray-100"
                />
                <div className="relative">
                    <div className="lg:max-w-full lg:px-8 lg:grid lg:grid-cols-1 lg:grid-flow-col-dense lg:gap-24">
                        <div className="lg:mx-24 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
                            <div>
                                <div>
                  <span
                      className="h-12 w-12 rounded-md flex items-center justify-center bg-gradient-to-r from-purple-600 to-indigo-600">
                    <InboxIcon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                    />
                  </span>
                                </div>
                                <div className="mt-6">
                                    <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                                        PRODUCTS
                                    </h2>
                                    <p className="mt-4 text-lg text-gray-500">
                                        A small description of our products in Rankin Records.
                                    </p>
                                </div>


                                <div className="relative py-4">
                                    <div className="relative">
                                        <div
                                            className="text-center mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
                                            <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
                                                BEATS
                                            </p>
                                            <p className="mt-5 mx-auto max-w-prose text-xl text-gray-500">
                                                a short description of our products
                                            </p>
                                        </div>
                                        <div
                                            className="mt-12 p-32 bg-gray-700 mx-auto max-w-md px-4 grid gap-8 sm:max-w-lg sm:px-6 lg:px-8 lg:grid-cols-3 lg:max-w-7xl">
                                            {/* beats here */}
                                        </div>
                                    </div>
                                </div>


                                <div className="relative py-4">
                                    <div className="relative">
                                        <div
                                            className="text-center mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
                                            <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
                                                MERCHANDISE
                                            </p>
                                            <p className="mt-5 mx-auto max-w-prose text-xl text-gray-500">
                                                a short description of our products
                                            </p>
                                        </div>
                                        <div
                                            className="mt-12 p-32 bg-gray-700 mx-auto max-w-md px-4 grid gap-8 sm:max-w-lg sm:px-6 lg:px-8 lg:grid-cols-3 lg:max-w-7xl">
                                            {/* marchendise here */}
                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Gradient Feature Section */}
            <div className="bg-gradient-to-r from-gray-900 to-gray-600" id="aboutusSection">
                <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 sm:pt-20 sm:pb-24 lg:max-w-7xl lg:pt-24 lg:px-8">
                    <h2 className="text-3xl font-extrabold text-white tracking-tight">
                        HOW IT WORKS?
                    </h2>
                    <p className="mt-4 max-w-3xl text-lg text-purple-200">
                        It is as easy as you can imagine.
                    </p>
                    <div
                        className="mt-12 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-16">
                        {features.map((feature) => (
                            <div key={feature.name}>
                                <div>
                  <span className="flex items-center justify-center h-12 w-12 rounded-md bg-white bg-opacity-10">
                    <feature.icon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                    />
                  </span>
                                </div>
                                <div className="mt-6">
                                    <h3 className="text-lg font-medium text-white">
                                        {feature.name}
                                    </h3>
                                    <p className="mt-2 text-base text-purple-200">
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>


            {/* Logo Cloud */}
            <div className="bg-gray-100">
                <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                    <p className="text-center text-sm font-semibold uppercase text-gray-500 tracking-wide">
                        Trusted by over 5 very average small businesses
                    </p>
                    <div className="mt-6 grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
                        <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                            <img
                                className="h-12"
                                src="https://tailwindui.com/img/logos/tuple-logo-gray-400.svg"
                                alt="Tuple"
                            />
                        </div>
                        <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                            <img
                                className="h-12"
                                src="https://tailwindui.com/img/logos/mirage-logo-gray-400.svg"
                                alt="Mirage"
                            />
                        </div>
                        <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                            <img
                                className="h-12"
                                src="https://tailwindui.com/img/logos/statickit-logo-gray-400.svg"
                                alt="StaticKit"
                            />
                        </div>
                        <div className="col-span-1 flex justify-center md:col-span-2 md:col-start-2 lg:col-span-1">
                            <img
                                className="h-12"
                                src="https://tailwindui.com/img/logos/transistor-logo-gray-400.svg"
                                alt="Transistor"
                            />
                        </div>
                        <div className="col-span-2 flex justify-center md:col-span-2 md:col-start-4 lg:col-span-1">
                            <img
                                className="h-12"
                                src="https://tailwindui.com/img/logos/workcation-logo-gray-400.svg"
                                alt="Workcation"
                            />
                        </div>
                    </div>
                </div>
            </div>


            {/* Stats section */}
            <div className="relative bg-gray-900">
                <div className="h-80 absolute inset-x-0 bottom-0 xl:top-0 xl:h-full">
                    <div className="h-full w-full xl:grid xl:grid-cols-2">
                        <div className="h-full xl:relative xl:col-start-2">
                            <img
                                className="h-full w-full object-cover opacity-25 xl:absolute xl:inset-0"
                                src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2830&q=80&sat=-100"
                                alt="People working on laptops"
                            />
                            <div
                                aria-hidden="true"
                                className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-gray-900 xl:inset-y-0 xl:left-0 xl:h-full xl:w-32 xl:bg-gradient-to-r"
                            />
                        </div>
                    </div>
                </div>

                <div
                    className="max-w-4xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8 xl:grid xl:grid-cols-2 xl:grid-flow-col-dense xl:gap-x-8">
                    <div className="relative pt-12 pb-64 sm:pt-24 sm:pb-64 xl:col-start-1 xl:pb-24">
                        <p className="mt-3 text-3xl font-extrabold text-white">
                            WHY JOIN US
                        </p>
                        <p className="mt-5 text-lg text-gray-300">
                            Rhoncus sagittis risus arcu erat lectus bibendum. Ut in adipiscing
                            quis in viverra tristique sem. Ornare feugiat viverra eleifend
                            fusce orci in quis amet. Sit in et vitae tortor, massa. Dapibus
                            laoreet amet lacus nibh integer quis. Eu vulputate diam sit tellus
                            quis at.
                        </p>
                        <div className="mt-12 grid grid-cols-1 gap-y-12 gap-x-6 sm:grid-cols-2">
                            {metrics.map((item) => (
                                <p key={item.id}>
                  <span className="block text-2xl font-bold text-white">
                    {item.stat}
                  </span>
                                    <span className="mt-1 block text-base text-gray-300">
                    <span className="font-medium text-white">
                      {item.emphasis}
                    </span>{" "}
                                        {item.rest}
                  </span>
                                </p>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="bg-white">
                <div
                    className="max-w-4xl mx-auto py-16 px-4 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 lg:flex lg:items-center lg:justify-between">
                    <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                        <span className="block">Ready to get started?</span>
                        <span
                            className="block bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Get in touch or create an account.
            </span>
                    </h2>
                    <div className="mt-6 space-y-4 sm:space-y-0 sm:flex sm:space-x-5">
                        <Link
                            to="/signup"
                            className="flex items-center justify-center bg-gradient-to-r from-purple-600 to-indigo-600 bg-origin-border px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white hover:from-purple-700 hover:to-indigo-700"
                        >
                            Sign Up
                        </Link>
                        <Link
                            to="/signin"
                            className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-indigo-800 bg-indigo-50 hover:bg-indigo-100"
                        >
                            Log In
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Home;
