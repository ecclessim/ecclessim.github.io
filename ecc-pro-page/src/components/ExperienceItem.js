export default function ExperienceItem({ experience }) {
  return (
    <div className="row">
      {experience.dateStart && experience.dateEnd && (
        <div className="col-md-4">
          <p className="fw-bold text-left text-secondary" style={{fontSize:".875rem"}}>
            {experience.dateStart.toLowerCase()} —{" "}
            {experience.dateEnd.toLowerCase()}
          </p>
        </div>
      )}
      <div className="col">
        {experience.hyperlink ? (
          <a
            href={experience.hyperlink}
            target="_blank"
            rel="noreferrer"
            className="fs-6 fw-bold"
          >
            {experience.companyName}
          </a>
        ) : (
          <p className="fs-6 fw-bold">
            {experience.role} {experience.role && "·"} {experience.companyName}
          </p>
        )}
        <p className="fs-6 fw-medium">{experience.team}</p>
        {experience.description && (
          <p className="fs-6 text-white-50">{experience.description}</p>
        )}
        {experience.skills &&
          experience.skills.map((s, i) => (
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
