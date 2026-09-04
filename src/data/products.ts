/**
 * Charger range. Specifications are taken from the manufacturer's product
 * catalogue (WAGA Motion). Keep them in sync with the current catalogue
 * revision and do not add figures that are not published there.
 */

import { asset } from '../lib/asset'

export type Family = 'ac' | 'dc' | 'ultra'

export type Product = {
  id: string
  family: Family
  /** Card heading: what the unit is, in plain language. */
  title: string
  /** Manufacturer model designation. */
  model: string
  tag: string
  /** Omit when there is no honest product photo; the card falls back to a typographic panel. */
  image?: string
  alt?: string
  /** Reusable card crop controls for source images with uneven framing or baked-in borders. */
  media?: {
    scale?: number
    position?: string
    origin?: string
  }
  blurb: string
  specs: { k: string; v: string }[]
}

export const families: { id: Family | 'all'; label: string; shortLabel: string }[] = [
  { id: 'all', label: 'All chargers', shortLabel: 'All' },
  { id: 'ac', label: 'AC 7-43 kW', shortLabel: 'AC' },
  { id: 'dc', label: 'DC 20-240 kW', shortLabel: 'DC fast' },
  { id: 'ultra', label: 'Ultra-fast 240-720 kW', shortLabel: 'Ultra-fast' },
]

export const products: Product[] = [
  {
    id: 'hp102',
    family: 'ac',
    title: 'Compact home wall box',
    model: 'HP102',
    tag: 'Home',
    image: asset('/assets/img/product-hp102.png'),
    alt: 'HP102 compact AC wall charger mounted in a garage',
    blurb:
      'The smallest unit in the range and the natural choice for a house or a single bay. Tethered Type 2 cable, optional 2.8″ screen, RFID or app start.',
    specs: [
      { k: 'Output', v: '7 / 11 / 22 kW' },
      { k: 'Supply', v: '230 V 32 A · 400 V 16/32 A' },
      { k: 'Connector', v: 'Type 2 plug' },
      { k: 'Protection', v: 'IP65 / IK10' },
      { k: 'Size · weight', v: '230 × 143 × 325 mm · 7.7 kg' },
      { k: 'Certification', v: 'CE, CB, UKCA' },
    ],
  },
  {
    id: 'cp306',
    family: 'ac',
    title: 'Wall box with touchscreen',
    model: 'CP306 · S / E / T / D',
    tag: 'Home · Business',
    image: asset('/assets/img/product-cp306.png'),
    alt: 'CP306 AC wall charger with a car parked alongside',
    blurb:
      'A 7″ screen for session information and pricing, up to 43 kW three-phase. Suited to workplaces and customer parking where drivers expect feedback.',
    specs: [
      { k: 'Output', v: '7 / 11 / 22 / 43 kW' },
      { k: 'Display', v: '7″ LCD + LED indicator' },
      { k: 'Connector', v: 'Type 2 plug' },
      { k: 'Protection', v: 'IP65 / IK10' },
      { k: 'Size · weight', v: '245 × 121 × 365 mm · from 6.5 kg' },
      { k: 'Certification', v: 'CE, CB, UKCA, TR25, RCM' },
    ],
  },
  {
    id: 'cp308',
    family: 'ac',
    title: 'Weather-sealed wall box',
    model: 'CP308 · S / E / T / D',
    tag: 'Outdoor',
    image: asset('/assets/img/product-cp308.png'),
    alt: 'CP308 AC wall charger charging a white car',
    blurb:
      'The same 7″ interface in an IP66 enclosure, for exposed outdoor bays and wash-down environments.',
    specs: [
      { k: 'Output', v: '7 / 11 / 22 / 43 kW' },
      { k: 'Display', v: '7″ LCD + LED indicator' },
      { k: 'Connector', v: 'Type 2 plug' },
      { k: 'Protection', v: 'IP66 / IK10' },
      { k: 'Size · weight', v: '313 × 157 × 451 mm · from 5.3 kg' },
      { k: 'Certification', v: 'CE, CB, UKCA' },
    ],
  },
  {
    id: 'dp308',
    family: 'ac',
    title: 'Dual-outlet wall box',
    model: 'DP308',
    tag: 'Two bays',
    image: asset('/assets/img/product-dp308.png'),
    alt: 'DP308 dual-outlet AC charger serving two bays',
    blurb:
      'Two independent outlets from one unit, the efficient way to cover two adjacent bays in a parkade or staff car park. Tethered cable or socket.',
    specs: [
      { k: 'Output', v: '2 × 7 / 11 / 22 kW' },
      { k: 'Display', v: '7″ LCD + LED indicator' },
      { k: 'Connector', v: 'Type 2 cable or socket' },
      { k: 'Protection', v: 'IP66 / IK10 (IP54 cable & socket versions)' },
      { k: 'Size', v: '313 × 157 × 451 mm' },
      { k: 'Certification', v: 'CE, CB, UKCA' },
    ],
  },
  {
    id: 'lps300',
    family: 'ac',
    title: 'Slim-profile charge point',
    model: 'LPS300 · S / E / T',
    tag: 'Slim line',
    blurb:
      'A low-profile unit for rows of bays where a conventional box would intrude. No screen; sessions start by RFID card or app.',
    specs: [
      { k: 'Output', v: '7 / 11 / 22 kW' },
      { k: 'Start', v: 'RFID card or mobile app' },
      { k: 'Connector', v: 'Type 2 plug' },
      { k: 'Protection', v: 'IP54 / IK10' },
      { k: 'Size · weight', v: '600 × 130 × 100 mm · 5.6 kg' },
      { k: 'Certification', v: 'CE, CB, UKCA, TR25, RCM' },
    ],
  },
  {
    id: 'lp-cp308d',
    family: 'ac',
    title: 'Free-standing pedestal, two sockets',
    model: 'LP-CP308D',
    tag: 'Pedestal',
    image: asset('/assets/img/product-lp-cp308d.png'),
    alt: 'LP-CP308D pedestal charger next to a parked car',
    blurb:
      'For open parking where there is no wall to mount to. Two 22 kW sockets on one pedestal, with a 7″ screen at driver height.',
    specs: [
      { k: 'Output', v: '2 × 22 kW (400 V, 32 A per outlet)' },
      { k: 'Display', v: '7″ LCD + LED indicator' },
      { k: 'Connector', v: '2 × Type 2 socket' },
      { k: 'Protection', v: 'IP54 / IK10' },
      { k: 'Size · weight', v: '400 × 200 × 1370 mm · 40 kg' },
      { k: 'Certification', v: 'CE, CB, UKCA' },
    ],
  },
  {
    id: 'dp55',
    family: 'ac',
    title: 'Charging column with 55″ display',
    model: 'DP55',
    tag: 'Advertising',
    image: asset('/assets/img/product-dp55.png'),
    alt: 'DP55 charging column with a large advertising display',
    media: { scale: 1.09, position: 'left center', origin: 'left center' },
    blurb:
      'Two AC outlets plus a full-height digital screen, so a retail or municipal site earns media revenue alongside the charging. Plug & Charge (ISO/IEC 15118) optional.',
    specs: [
      { k: 'Output', v: '2 × 7 / 11 / 22 kW' },
      { k: 'Display', v: '55″ LCD screen' },
      { k: 'Connector', v: 'Type 2 cable, 5.5 m (7.5 m optional)' },
      { k: 'Protection', v: 'IP54 / IK10' },
      { k: 'Size · weight', v: '1277 × 210 × 1829 mm · 45 kg' },
      { k: 'Certification', v: 'CE, CB, UKCA' },
    ],
  },
  {
    id: 'dc28',
    family: 'dc',
    title: '28 kW wall-mounted DC',
    model: 'M4SW-DC28 · M4DW-DC28',
    tag: 'Single-phase DC',
    image: asset('/assets/img/product-dc28.png'),
    alt: '28 kW wall-mounted DC charger with cable connected to a car',
    blurb:
      'DC fast charging from a single-phase 240 V supply, useful where three-phase is not available. Choose one outlet, or two that share the 28 kW.',
    specs: [
      { k: 'Output', v: '28 kW · or 2 × 14 kW' },
      { k: 'Connectors', v: 'CCS2 and/or CHAdeMO' },
      { k: 'DC range', v: 'CCS2 200-1000 V · CHAdeMO 150-500 V' },
      { k: 'Interface', v: '7″ touch screen' },
      { k: 'Size · weight', v: '550 × 300 × 750 mm · 77 kg' },
      { k: 'Protection', v: 'IP54 / IK10' },
    ],
  },
  {
    id: 'dc20-40',
    family: 'dc',
    title: '20-40 kW compact DC',
    model: 'M4SW-DC20 / DC30 / DC40',
    tag: 'Compact',
    image: asset('/assets/img/product-dc20-40.png'),
    alt: 'Compact wall-mounted DC charger charging a blue SUV',
    blurb:
      'At 38 kg this mounts on a wall or a slim pedestal, which makes it the practical choice for urban top-up sites and small depots.',
    specs: [
      { k: 'Output', v: '20 / 30 / 40 kW' },
      { k: 'Supply', v: '3-phase 400 V' },
      { k: 'Connectors', v: 'CCS2 or CHAdeMO' },
      { k: 'Interface', v: '7″ touch screen' },
      { k: 'Size · weight', v: '410 × 210 × 640 mm · 38 kg' },
      { k: 'Protection', v: 'IP54 / IK10' },
    ],
  },
  {
    id: 'dc30-60',
    family: 'dc',
    title: '30-60 kW dual-outlet DC',
    model: 'M4DW-DC30 / DC40 / DC60',
    tag: 'Two bays',
    image: asset('/assets/img/product-dc30-60.png'),
    alt: 'Dual-outlet DC charger installed behind a parked electric car',
    media: { scale: 1.015, position: 'left center', origin: 'left center' },
    blurb:
      'Two cables from one cabinet, splitting the power or delivering it all to one vehicle. A good fit for forecourts serving two bays.',
    specs: [
      { k: 'Output', v: '30 / 40 / 60 kW · 2 × 15 / 20 / 30 kW' },
      { k: 'Supply', v: '3-phase 400 V' },
      { k: 'Connectors', v: 'CCS2 and/or CHAdeMO' },
      { k: 'Interface', v: '7″ touch screen' },
      { k: 'Size · weight', v: '650 × 260 × 900 mm · 77 kg' },
      { k: 'Protection', v: 'IP54 / IK10' },
    ],
  },
  {
    id: 'dc60-240',
    family: 'dc',
    title: '60-240 kW floor-standing DC',
    model: 'M4DS-DC60-DC240',
    tag: 'Public network',
    image: asset('/assets/img/product-dc60-240.png'),
    alt: 'Floor-standing DC fast charger with two charging cables',
    media: { scale: 1.04, position: 'left center', origin: 'left center' },
    blurb:
      'The workhorse for public fast charging: two outlets, up to 200 A, a 10.1″ touch screen and an MID-standard energy meter for billing you can defend.',
    specs: [
      { k: 'Output', v: '60 / 80 / 120 / 160 / 180 / 240 kW' },
      { k: 'Split', v: '2 × 30 kW up to 2 × 120 kW' },
      { k: 'Connectors', v: 'CCS2 and/or CHAdeMO · 200 A max' },
      { k: 'Interface', v: '10.1″ touch screen · MID meter' },
      { k: 'Size · weight', v: '800 × 500 × 1800 mm · ≈256 kg' },
      { k: 'Protection', v: 'NEMA Type 3 (IP54) / IK10' },
    ],
  },
  {
    id: 'dc-ad',
    family: 'dc',
    title: '60-240 kW with media screen',
    model: 'DC-AD',
    tag: 'Advertising',
    image: asset('/assets/img/product-dc-ad.png'),
    alt: 'DC fast charger with a large vertical advertising screen',
    media: { scale: 1.025, position: 'left center', origin: 'left center' },
    blurb:
      'The same power platform behind a 21.5″, 27″ or 32″ advertising display, for high-visibility retail and forecourt sites.',
    specs: [
      { k: 'Output', v: '60 / 80 / 120 / 160 / 180 / 240 kW' },
      { k: 'Connectors', v: 'Single or dual: CCS2 and/or CHAdeMO' },
      { k: 'DC range', v: '200-1000 V · 200 A max' },
      { k: 'Display', v: '21.5″ / 27″ / 32″ LCD' },
      { k: 'Size', v: '800 × 500 × 1800 mm' },
      { k: 'Protection', v: 'NEMA Type 3 (IP54) / IK10' },
    ],
  },
  {
    id: 'pedestals',
    family: 'dc',
    title: 'Pedestals & mounting',
    model: 'Accessories',
    tag: 'Mounting',
    image: asset('/assets/img/pedestals.png'),
    alt: 'Range of charger mounting pedestals',
    blurb:
      'Where there is no wall, chargers go on a pedestal. Single, triangular, hexagonal and back-to-back options let one foundation serve one to four bays.',
    specs: [
      { k: 'Single', v: '155 × 240 × 1330 mm' },
      { k: 'Triangular', v: '297 × 330 × 1330 mm' },
      { k: 'Hexagonal', v: '250 × 527 × 2000 mm' },
      { k: 'Back-to-back', v: '367 × 406 × 2000 mm' },
      { k: 'Cable management', v: 'Optional' },
    ],
  },
  {
    id: 'dc240-720',
    family: 'ultra',
    title: 'Split-system power cabinet',
    model: 'M4DP-DC 240 / 360 / 480 / 720 kW',
    tag: 'Highway hub',
    image: asset('/assets/img/product-dc240-720.png'),
    alt: 'Split-system charging hub with a central power cabinet and a row of dispensers',
    media: { scale: 1.065, position: 'left center', origin: 'left center' },
    blurb:
      'One cabinet feeds up to eight slim dispensers, and power moves to whichever bays need it in 60 kW increments. This is how a hub serves many vehicles without over-building every bay.',
    specs: [
      { k: 'Cabinet output', v: '240 / 360 / 480 / 720 kW' },
      { k: 'Dispensers', v: '2, 4, 6 or 8 connectors' },
      { k: 'Per connector', v: '200 / 300 / 350 A · 200-1000 V' },
      { k: 'Load sharing', v: 'Flexible, 60 kW increments' },
      { k: 'Efficiency', v: '96% peak · PF 0.99 · THDi < 5%' },
      { k: 'Enclosure', v: 'Stainless steel · IP55 / IK10' },
    ],
  },
]
