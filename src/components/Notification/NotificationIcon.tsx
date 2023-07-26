import { ElementType } from "react";

interface NotificationIconProps {
	icon: ElementType;
}

const NotificationIcon = ({ icon: Icon }: NotificationIconProps) => {
	return <Icon className="w-6 h-6 text-violet-500 mt-3" />;
};

export default NotificationIcon;
