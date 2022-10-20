import './project_card.scss';
import {useEffect, useState} from "react";

interface Props {
    name: string,
    repo: string,
    status: string,
    description: string,
    colspan: string,
    tech: string,
}

function ProjectCard(props: Props) {
    const BACKGROUNDS = ["#101010", "#151515", "#202020", "#252525"];
    let selected_background = BACKGROUNDS[Math.floor(Math.random() * BACKGROUNDS.length)];
    let [stars, setStars] = useState(0);
    useEffect(() => {
        (async () => {
            const result = await fetch(`https://api.github.com/repos/${props.repo}`);
            const json = await result.json();
            setStars(json.stargazers_count);
        })()
            .catch(console.error);
    }, [stars, props.repo]);

    return (
        <div className={`repo-card flex flex-col sm:p-10 p-3 pt-10 pb-10 gap-5 ${props.colspan}`} style={{background: selected_background}}>
            <h1 className="sm:text-5xl text-4xl font-extrabold tracking-tighter">{props.name}</h1>
            <p className="font-semibold tracking-tighter text-2xl max-w-3xl">{props.description}</p>
            <div className="flex-1 flex flex-wrap items-end">
                <div className="flex-1 flex flex-wrap items-center justify-between gap-5">
                    <div className="flex gap-5 flex-wrap">
                        <div className="p-2 flex flex-col font-semibold tracking-tight">
                            Tech:
                            <span className="block">{props.tech}</span>
                        </div>
                        <div className="p-2 flex flex-col font-semibold tracking-tight">
                            Status:
                            <span className="block">{props.status}</span>
                        </div>
                        <div className="p-2 flex flex-col font-semibold tracking-tight">
                            Stars:
                            <span className="block">{stars.toString()}</span>
                        </div>
                    </div>
                    <a
                        className="repo-link p-5 sm:-rotate-45"
                        target="_blank"
                        rel="noreferrer"
                        href={`https://github.com/${props.repo}`}>
                            <div className="href-arrow text-7xl">&rarr;</div>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;