interface GreetProps {
  name: string;
  messageCount?: number;
}

export const Greet = ({ name, messageCount = 0 }: GreetProps) => {
  return `Welcome ${name}, you have ${messageCount} unread messages`;
};
