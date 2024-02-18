interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <div
      className="
    h-14
    px-5
    shadow-sm
    py-14px
    "
    >
      <h3
        className="
      font-DanaBold 
      text-lg
      h-7
      "
      >
        {title}
      </h3>
    </div>
  );
};

export default Header;
