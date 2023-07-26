interface NotificationContentProps {
	text: string;
}

const NotificationContent = ({ text }: NotificationContentProps) => {
	return (
		<div className="flex-1 flex flex-col gap-2">
			<p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-100">
				{text}
			</p>
			<div className="text-xxs text-zinc-400 flex gap-1 items-center">
				<span>Convite</span>
				<span>há 3 min</span>
			</div>
		</div>
	);
};

export default NotificationContent;
