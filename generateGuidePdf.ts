import { jsPDF } from 'jspdf';

export const GENERATED_PDF_FILENAME = 'Kelechi-Motors-Used-Car-Buying-Guide.pdf';

const PDF_MISTAKES = [
  {
    number: '01',
    mistakeTitle: 'Buying a Flooded or Heavily Repaired Accident Car',
    description:
      'Many imported (Tokunbo) and locally used vehicles undergo cosmetic repainting after collisions or water damage. Check uneven panel gaps, overspray on rubber seals, silt under carpets, and rust on seat-rail bolts.',
    practicalCheck: 'Inspect spare-tyre well, seatbelt bases, and door-hinge bolts in daylight.',
  },
  {
    number: '02',
    mistakeTitle: 'Skipping an Independent Diagnostic Scan Before Paying',
    description:
      'Dashboard warning bulbs can be disconnected or fault codes cleared shortly before a viewing. An independent OBD-II diagnostic scan shows whether readiness monitors are complete or faults are masked.',
    practicalCheck: 'Have an independent mechanic scan ECU readiness monitors before paying.',
  },
  {
    number: '03',
    mistakeTitle: 'Trusting Odometer Readings Without Checking Vehicle History & Wear',
    description:
      'Odometer tampering is common on older imported and Nigerian-used cars. Compare displayed mileage against steering-wheel polish, pedal rubber wear, driver-seat bolsters, and available VIN history records.',
    practicalCheck: 'Match dashboard VIN plate against door-jamb sticker and chassis stamp.',
  },
  {
    number: '04',
    mistakeTitle: 'Testing the Car Only After the Engine Is Already Warm',
    description:
      'A pre-warmed engine can hide rough morning starts and weak batteries. Start the car cold, test reverse and forward gear engagement smoothly, and run A/C at idle to verify radiator fans and cooling.',
    practicalCheck: 'Arrive early so you observe a cold start and test A/C cooling at idle.',
  },
  {
    number: '05',
    mistakeTitle: 'Ignoring Local Spare Parts Availability & Road Suitability',
    description:
      'A low purchase price can turn into long workshop delays if body panels, sensors, or suspension parts are scarce locally. Check parts availability, ground clearance, and trusted mechanic support.',
    practicalCheck: 'Confirm common service items (pads, shocks, filters) are readily stocked locally.',
  },
  {
    number: '06',
    mistakeTitle: 'Paying Without Verifying Customs Papers & Ownership Documents',
    description:
      'Incomplete customs duty papers, mismatched chassis numbers, or unclear third-party ownership cause legal and resale trouble. Verify original customs papers, vehicle licence, proof of ownership, and seller ID.',
    practicalCheck: 'Cross-check chassis/VIN across every paper document prior to bank transfer.',
  },
  {
    number: '07',
    mistakeTitle: 'Rushing Into Payment Under Pressure Without a Written Agreement',
    description:
      'Urgent buyer pressure leads people to overlook worn tyres, weak shocks, or missing paperwork. Factor needed repairs into your budget and obtain a signed receipt stating vehicle details and payment terms.',
    practicalCheck: 'Never pay a non-refundable deposit before inspection and document checks.',
  },
];

export function buildUsedCarGuidePdfDocument(): jsPDF {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
  });

  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 15;
  const contentWidth = pageWidth - margin * 2;

  // Header Banner
  doc.setFillColor(11, 31, 58); // Navy #0B1F3A
  doc.rect(0, 0, pageWidth, 38, 'F');
  doc.setFillColor(197, 155, 39); // Gold #C59B27
  doc.rect(0, 38, pageWidth, 1.5, 'F');

  doc.setTextColor(216, 177, 67);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9);
  doc.text('KELECHI MOTORS  ·  SMART USED-CAR BUYING GUIDE', margin, 11);

  doc.setTextColor(255, 255, 255);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(16.5);
  doc.text('Avoid These 7 Costly Mistakes When Buying a Used Car', margin, 21);

  doc.setTextColor(226, 232, 240);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.8);
  doc.text(
    'Practical inspection tips, document verification, and payment safety checks for Nigerian used-car buyers.',
    margin,
    30
  );

  // Section 1: 7 Mistakes & Inspection Tips
  let y = 47;
  doc.setTextColor(11, 31, 58);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.text('7 Costly Mistakes to Avoid (With Practical Inspection Tips)', margin, y);
  y += 6;

  PDF_MISTAKES.forEach((item) => {
    doc.setTextColor(180, 137, 30);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9);
    doc.text(`${item.number}.`, margin, y);

    doc.setTextColor(11, 31, 58);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9.5);
    doc.text(item.mistakeTitle, margin + 6.5, y);

    doc.setTextColor(51, 65, 85);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    const descLines = doc.splitTextToSize(item.description, contentWidth - 6.5);
    doc.text(descLines, margin + 6.5, y + 3.8, { lineHeightFactor: 1.25 });

    const checkY = y + 3.8 + descLines.length * 3.5;
    doc.setTextColor(11, 31, 58);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(7.8);
    doc.text(`Inspection Tip: ${item.practicalCheck}`, margin + 6.5, checkY);

    doc.setDrawColor(226, 232, 240);
    doc.line(margin, checkY + 2.4, pageWidth - margin, checkY + 2.4);

    y = checkY + 6;
  });

  // Section 2: Quick Summary Boxes (Inspection, Documents, Payment Safety)
  const boxTop = Math.max(y + 1, 224);
  const colGap = 4;
  const colWidth = (contentWidth - colGap * 2) / 3;
  const boxHeight = 46;

  const pillars = [
    {
      title: '1. Inspection Tips',
      lines: [
        '- Inspect in clear daylight.',
        '- Check trunk & seat bolts for rust.',
        '- Start engine cold; test A/C idle.',
        '- Run an independent OBD-II scan.',
      ],
    },
    {
      title: '2. Document Verification',
      lines: [
        '- Match VIN on dash, door & papers.',
        '- Check customs duty (Tokunbo).',
        '- Confirm proof of ownership.',
        '- Verify seller identity & authority.',
      ],
    },
    {
      title: '3. Payment Safety Tips',
      lines: [
        '- Never pay under rush pressure.',
        '- Avoid deposits before inspection.',
        '- Budget for insurance & service.',
        '- Get a signed receipt & terms.',
      ],
    },
  ];

  pillars.forEach((pillar, index) => {
    const x = margin + index * (colWidth + colGap);
    doc.setFillColor(248, 250, 252);
    doc.setDrawColor(203, 213, 225);
    doc.roundedRect(x, boxTop, colWidth, boxHeight, 1.5, 1.5, 'FD');

    doc.setTextColor(11, 31, 58);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.5);
    doc.text(pillar.title, x + 3, boxTop + 6);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7.5);
    doc.setTextColor(51, 65, 85);
    pillar.lines.forEach((line, lIdx) => {
      doc.text(line, x + 3, boxTop + 13 + lIdx * 7.2);
    });
  });

  // Footer
  doc.setFontSize(7.8);
  doc.setTextColor(100, 116, 139);
  doc.text('Kelechi Motors · Buy Smart. Drive With Confidence.', margin, pageHeight - 8);
  doc.text('Page 1 of 1', pageWidth - margin - 15, pageHeight - 8);

  return doc;
}

export async function downloadUsedCarGuidePdf(): Promise<void> {
  try {
    const response = await fetch('/api/download-guide', { cache: 'no-store' });
    if (response.ok) {
      const arrayBuffer = await response.arrayBuffer();
      const header = new TextDecoder().decode(arrayBuffer.slice(0, 5));
      if (header === '%PDF-') {
        const blob = new Blob([arrayBuffer], { type: 'application/pdf' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = GENERATED_PDF_FILENAME;
        document.body.appendChild(link);
        link.click();
        link.remove();
        setTimeout(() => URL.revokeObjectURL(url), 4000);
        return;
      }
    }
  } catch {
    // Fall back to direct client-side jsPDF generation below
  }

  const doc = buildUsedCarGuidePdfDocument();
  doc.save(GENERATED_PDF_FILENAME);
}
