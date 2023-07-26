import { ReactNode } from "react";

interface NotificationRootProps {
	children: ReactNode;
}

const NotificationRoot = ({ children }: NotificationRootProps) => {
	return (
		<div className="bg-zinc-200 dark:bg-zinc-900 py-4 px-8 flex items-start gap-6">
			{children}
		</div>
	);
};

export default NotificationRoot;
