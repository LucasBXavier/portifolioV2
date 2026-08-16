import { Section } from "@/components/ui/Section";
import { Timeline } from "@/components/ui/Timeline";
import { processSteps } from "@/lib/data";

export function Process() {
  return (
    <Section
      id="processo"
      label="Fluxo de trabalho"
      title="Como eu trabalho"
      description="Um processo claro e transparente, do primeiro contato até o suporte pós-entrega."
      align="center"
    >
      <Timeline items={processSteps} orientation="horizontal" />
    </Section>
  );
}
