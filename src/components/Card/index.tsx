import { CardContainer } from "./styles";

interface Props {
  title: string;
  value: string;
  icon: string;
}

function Card({ title, value, icon }: Props) {
  return (
    <div className="card">
      <div className="card-header">
        <div className="card-header-icon">
          <i className={icon}></i>
        </div>
        <div className="card-header-title">
          <h3>{title}</h3>
        </div>
      </div>
      <div className="card-content">
        <p>{value}</p>
      </div>
    </div>
  );
}

export default Card;
