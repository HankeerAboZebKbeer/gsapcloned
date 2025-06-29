import { useRive, Layout, Fit, Alignment } from "@rive-app/react-webgl2";

export default function TestRive() {
  const { RiveComponent } = useRive({
    src: "coin.riv",
    stateMachines: "Main SM",
    layout: new Layout({ fit: Fit.Contain, alignment: Alignment.Center }),
    autoplay: true,
  });
  return (
    <div style={{ width: "300px", height: "300px", border: "1px solid red" }}>
      <RiveComponent />
    </div>
  );
}
