"use client";

import { ArrowRight, Check, Rocket, X } from "lucide-react";
import { Notification } from "./Notification";

const Widget = () => {
	return (
		<div className="w-[448px] overflow-hidden rounded">
			<div className="bg-zinc-200 dark:bg-zinc-800 py-4 px-6 flex items-center justify-between">
				<span className="font-bold">Notification</span>
				<button className="font-bold text-violet-500 text-xs hover:text-violet-400">
					MARQUE TODAS COMO LIDAS
				</button>
			</div>

			<div>
				<div className="bg-zinc-300 font-medium dark:bg-zinc-950 text-sm px-5 py-2 text-zinc-500 dark:text-zinc-400">
					Recentes
				</div>

				<div className="divide-y-2 divide-zinc-300 dark:divide-zinc-950">
					<Notification.Root>
						<Notification.Icon icon={Rocket} />
						<Notification.Content text="Você recebeu um convite para fazer parte da empresa Rocketseat." />
						<Notification.Actions>
							<Notification.Action onClick={() => {}} icon={X} />
							<Notification.Action
								onClick={() => {}}
								icon={Check}
								className="bg-violet-500 hover:bg-violet-600 dark:bg-violet-500 dark:hover:bg-violet-600"
							/>
						</Notification.Actions>
					</Notification.Root>

					<Notification.Root>
						<Notification.Icon icon={Rocket} />
						<Notification.Content text="Você recebeu um convite para fazer parte da empresa Rocketseat." />
						<Notification.Actions>
							<Notification.Action
								onClick={() => {}}
								icon={ArrowRight}
								className="bg-emerald-500 hover:bg-emerald-600 dark:bg-emerald-500 dark:hover:bg-emerald-600"
							/>
						</Notification.Actions>
					</Notification.Root>
				</div>
			</div>

			<div>
				<div className="bg-zinc-300 font-medium dark:bg-zinc-950 text-sm px-5 py-2 text-zinc-500 dark:text-zinc-400">
					Antigas
				</div>

				<div className="divide-y-2 divide-zinc-300 dark:divide-zinc-950">
					<Notification.Root>
						<Notification.Icon icon={Rocket} />
						<Notification.Content text="Você recebeu um convite para fazer parte da empresa Rocketseat." />
					</Notification.Root>

					<Notification.Root>
						<Notification.Content text="Você recebeu um convite para fazer parte da empresa Rocketseat." />
					</Notification.Root>
				</div>
			</div>
		</div>
	);
};

export default Widget;
