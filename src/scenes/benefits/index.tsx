import {BenefitType, SelectedPage} from "../../shared/type";
import {motion} from "framer-motion";
import {HomeModernIcon,
        UserGroupIcon,
        AcademicCapIcon} from "@heroicons/react/20/solid";
import HText from "../../shared/HText";
import Benefit from "./Benefit";
import BenefitsPageGraphic from '../../assets/BenefitsPageGraphic.png'
import ActionButton from "../../shared/ActionButton";

const benefits: Array<BenefitType> = [
    {
        icon: <HomeModernIcon className="h-6 w-6" />,
        title: "State of the Art Facilities",
        description: "Neque adipiscing amet amet enim"
    },
    {
        icon: <UserGroupIcon className="h-6 w-6" />,
        title: "State of the Art Facilities",
        description: "Neque adipiscing amet amet enim"
    },
    {
        icon: <AcademicCapIcon className="h-6 w-6" />,
        title: "State of the Art Facilities",
        description: "Neque adipiscing amet amet enim"
    }
]

const container = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.2}
    }
}

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
};

const Benefits = ({setSelectedPage}: Props) => {
    return (
        <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
            <motion.div
                onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}>
                {/* Header */}
                <motion.div
                    className="md:my-5 md:w-3/5"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x:-50},
                        visible: { opacity: 1, x:0},
                    }}>
                    <HText>MORE THAN JUST GYM.</HText>
                    <p className="my-5 text-sm">
                        We provide world class fitness equipment.
                    </p>
                </motion.div>

                {/* Benefits */}
                <motion.div
                    className="md:flex items-center justify-between gap-8 md:flex"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5}}
                    variants={container}
                >
                    {benefits.map((benefit) => (
                        <Benefit
                            key={benefit.title}
                            icon={benefit.icon}
                            title={benefit.title}
                            description={benefit.description}
                            setSelectedPage={setSelectedPage}
                        />
                    ))}
                </motion.div>

                {/* GRAPHICS AND DESCRIPTION */}
                <div className="mt-16 items-center justify-between gap-20 md: mt-28 md:flex">
                    {/*  GRAPHIC  */}
                    <img
                        className="mx-auto"
                        alt="benefits-page-graphic"
                        src={BenefitsPageGraphic}
                    />

                    {/*  DESCRIPTION  */}
                    <div className="relative">
                        <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] before:content-abstractwaves">
                            <motion.div
                                className="md:-mt-20"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.5 }}
                                transition={{ duration: 0.5 }}
                                variants={{
                                    hidden: { opacity: 0, x:-50},
                                    visible: { opacity: 1, x:0},
                                }}>
                                <HText>
                                    MILLIONS OF HAPPY MEMBER GETTING{" "}
                                    <span className="text-primary-500">FIT</span>
                                </HText>
                            </motion.div>
                        </div>
                    </div>

                    <motion.div
                        className="md:-mt-20"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, x:-50},
                            visible: { opacity: 1, x:0},
                        }}>
                        <p className="my-5">Hello</p>
                        <p className="mb-5">Hello</p>
                    </motion.div>

                    <div className="relative mt-16">
                        <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                            <ActionButton setSelectedPage={setSelectedPage}>
                                Join Now
                            </ActionButton>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>)
};

export default Benefits;