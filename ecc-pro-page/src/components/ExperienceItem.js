export default function ExperienceItem({ experience }) {
  return (
    <div className="row">
      <div className="col-md-4">
        <p className="fs-6 fw-light text-left text-secondary">
          {experience.dateStart.toLowerCase()} —{" "}
          {experience.dateEnd.toLowerCase()}
        </p>
      </div>
      <div className="col">
        <p className="fs-6 fw-bold">
          {experience.role} · {experience.companyName}
        </p>
        <p className="fs-6 fw-medium">{experience.team}</p>
        <p className="fs-6 text-white-50">{experience.description}</p>
        {experience.skills.map((s, i) => (
          <span
            key={i}
            className="badge p-2 text-bg-dark me-2 text-info fw-medium"
          >
            {s}
          </span>
        ))}
      </div>
    </div>
  );
}
