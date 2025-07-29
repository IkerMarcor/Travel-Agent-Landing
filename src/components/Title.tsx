export const Title = ({ children }: { children: React.ReactNode }): JSX.Element => {
  return (
    <h2 className="w-full text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 break-words leading-tight my-6">
      {children}
    </h2>
  );
};
export default Title;