function StudentCard({
  prenom,
  nom,
  email,
  telephone,
  filiere,
  anneeEtude,
  groupe,
  ville,
  onDelete,
  onEdit,
}) {
  return (
    <div className="student-card">

      <h2>{prenom} {nom}</h2>

      <p><strong>Email :</strong> {email}</p>
      <p><strong>Téléphone :</strong> {telephone}</p>
      <p><strong>Filière :</strong> {filiere}</p>
      <p><strong>Année :</strong> {anneeEtude}</p>
      <p><strong>Groupe :</strong> {groupe}</p>
      <p><strong>Ville :</strong> {ville}</p>

      <button onClick={onEdit}>
        Modifier
      </button>

      <button onClick={onDelete}>
        Supprimer
      </button>

    </div>
  );
}

export default StudentCard;