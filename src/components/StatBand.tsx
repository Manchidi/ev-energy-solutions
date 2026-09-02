/**
 * Dark full-width capability band. These are equipment and standards facts;
 * do not put invented track-record numbers here.
 */
const items = [
  { value: '7-720 kW', label: 'One range covers homes to highway hubs' },
  { value: 'AC + DC', label: 'Type 2, CCS2 and CHAdeMO charging' },
  { value: 'OCPP 1.6J / 2.0.1', label: 'Open protocol cloud management' },
  { value: 'IEC 61851', label: 'CE, CB and UKCA certified hardware' },
]

export default function StatBand() {
  return (
    <section className="band">
      <div className="wrap band__inner">
        {items.map((item) => (
          <div className="band__item" key={item.value}>
            <b>{item.value}</b>
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
