type Props = {
  children: React.ReactNode;
  type: "FREE" | "SUBCRIPTION";
};
const SubcriptionPlan = ({ children, type }: Props) => {
  return children;
};

export default SubcriptionPlan;
