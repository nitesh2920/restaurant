import { useLayoutEffect, useEffect } from "react";
import useStore, { updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { Flex as Flex1 } from "@atrilabs/react-component-manifests/src/manifests/Flex/Flex.tsx";
import { TextBox as TextBox1 } from "@atrilabs/react-component-manifests/src/manifests/TextBox/TextBox.tsx";
import { Button as Button1 } from "@atrilabs/react-component-manifests/src/manifests/Button/Button.tsx";
import { Image as Image1 } from "@atrilabs/react-component-manifests/src/manifests/Image/Image.tsx";
import { useFlex175Cb, useFlex173Cb, useFlex171Cb, useFlex174Cb, useFlex172Cb, useFlex168Cb, useFlex169Cb, useFlex170Cb, useTextBox143Cb, useTextBox144Cb, useTextBox145Cb, useButton16Cb, useButton17Cb, useImage71Cb, useTextBox142Cb, useTextBox139Cb, useImage68Cb, useTextBox140Cb, useImage69Cb, useTextBox141Cb, useImage70Cb } from "../page-cbs/About";
import "../page-css/About.css";
import "../custom/About";

export default function About() {
  const navigate = useNavigate();
  useEffect(() => {
    const unsub = subscribeInternalNavigation((url) => {
      navigate(url);
    });
    return unsub;
  }, [navigate]);

  const location = useLocation();
  useLayoutEffect(()=>{
    fetchPageProps(location.pathname, location.search).then((res)=>{
      updateStoreStateFromController(res.pageName, res.pageState)
    })
  }, [location])

  const Flex175Props = useStore((state)=>state["About"]["Flex175"]);
const Flex175IoProps = useIoStore((state)=>state["About"]["Flex175"]);
const Flex175Cb = useFlex175Cb()
const Flex173Props = useStore((state)=>state["About"]["Flex173"]);
const Flex173IoProps = useIoStore((state)=>state["About"]["Flex173"]);
const Flex173Cb = useFlex173Cb()
const Flex171Props = useStore((state)=>state["About"]["Flex171"]);
const Flex171IoProps = useIoStore((state)=>state["About"]["Flex171"]);
const Flex171Cb = useFlex171Cb()
const Flex174Props = useStore((state)=>state["About"]["Flex174"]);
const Flex174IoProps = useIoStore((state)=>state["About"]["Flex174"]);
const Flex174Cb = useFlex174Cb()
const Flex172Props = useStore((state)=>state["About"]["Flex172"]);
const Flex172IoProps = useIoStore((state)=>state["About"]["Flex172"]);
const Flex172Cb = useFlex172Cb()
const Flex168Props = useStore((state)=>state["About"]["Flex168"]);
const Flex168IoProps = useIoStore((state)=>state["About"]["Flex168"]);
const Flex168Cb = useFlex168Cb()
const Flex169Props = useStore((state)=>state["About"]["Flex169"]);
const Flex169IoProps = useIoStore((state)=>state["About"]["Flex169"]);
const Flex169Cb = useFlex169Cb()
const Flex170Props = useStore((state)=>state["About"]["Flex170"]);
const Flex170IoProps = useIoStore((state)=>state["About"]["Flex170"]);
const Flex170Cb = useFlex170Cb()
const TextBox143Props = useStore((state)=>state["About"]["TextBox143"]);
const TextBox143IoProps = useIoStore((state)=>state["About"]["TextBox143"]);
const TextBox143Cb = useTextBox143Cb()
const TextBox144Props = useStore((state)=>state["About"]["TextBox144"]);
const TextBox144IoProps = useIoStore((state)=>state["About"]["TextBox144"]);
const TextBox144Cb = useTextBox144Cb()
const TextBox145Props = useStore((state)=>state["About"]["TextBox145"]);
const TextBox145IoProps = useIoStore((state)=>state["About"]["TextBox145"]);
const TextBox145Cb = useTextBox145Cb()
const Button16Props = useStore((state)=>state["About"]["Button16"]);
const Button16IoProps = useIoStore((state)=>state["About"]["Button16"]);
const Button16Cb = useButton16Cb()
const Button17Props = useStore((state)=>state["About"]["Button17"]);
const Button17IoProps = useIoStore((state)=>state["About"]["Button17"]);
const Button17Cb = useButton17Cb()
const Image71Props = useStore((state)=>state["About"]["Image71"]);
const Image71IoProps = useIoStore((state)=>state["About"]["Image71"]);
const Image71Cb = useImage71Cb()
const TextBox142Props = useStore((state)=>state["About"]["TextBox142"]);
const TextBox142IoProps = useIoStore((state)=>state["About"]["TextBox142"]);
const TextBox142Cb = useTextBox142Cb()
const TextBox139Props = useStore((state)=>state["About"]["TextBox139"]);
const TextBox139IoProps = useIoStore((state)=>state["About"]["TextBox139"]);
const TextBox139Cb = useTextBox139Cb()
const Image68Props = useStore((state)=>state["About"]["Image68"]);
const Image68IoProps = useIoStore((state)=>state["About"]["Image68"]);
const Image68Cb = useImage68Cb()
const TextBox140Props = useStore((state)=>state["About"]["TextBox140"]);
const TextBox140IoProps = useIoStore((state)=>state["About"]["TextBox140"]);
const TextBox140Cb = useTextBox140Cb()
const Image69Props = useStore((state)=>state["About"]["Image69"]);
const Image69IoProps = useIoStore((state)=>state["About"]["Image69"]);
const Image69Cb = useImage69Cb()
const TextBox141Props = useStore((state)=>state["About"]["TextBox141"]);
const TextBox141IoProps = useIoStore((state)=>state["About"]["TextBox141"]);
const TextBox141Cb = useTextBox141Cb()
const Image70Props = useStore((state)=>state["About"]["Image70"]);
const Image70IoProps = useIoStore((state)=>state["About"]["Image70"]);
const Image70Cb = useImage70Cb()

  return (<>
  <Flex1 className="p-About Flex175 bpt" {...Flex175Props} {...Flex175Cb} {...Flex175IoProps}>
<Flex1 className="p-About Flex174 bpt" {...Flex174Props} {...Flex174Cb} {...Flex174IoProps}>
<Image1 className="p-About Image71 bpt" {...Image71Props} {...Image71Cb} {...Image71IoProps}/>
<Flex1 className="p-About Flex172 bpt" {...Flex172Props} {...Flex172Cb} {...Flex172IoProps}>
<TextBox1 className="p-About TextBox142 bpt" {...TextBox142Props} {...TextBox142Cb} {...TextBox142IoProps}/>
<Flex1 className="p-About Flex170 bpt" {...Flex170Props} {...Flex170Cb} {...Flex170IoProps}>
<Image1 className="p-About Image70 bpt" {...Image70Props} {...Image70Cb} {...Image70IoProps}/>
<TextBox1 className="p-About TextBox141 bpt" {...TextBox141Props} {...TextBox141Cb} {...TextBox141IoProps}/>
</Flex1>
<Flex1 className="p-About Flex169 bpt" {...Flex169Props} {...Flex169Cb} {...Flex169IoProps}>
<Image1 className="p-About Image69 bpt" {...Image69Props} {...Image69Cb} {...Image69IoProps}/>
<TextBox1 className="p-About TextBox140 bpt" {...TextBox140Props} {...TextBox140Cb} {...TextBox140IoProps}/>
</Flex1>
<Flex1 className="p-About Flex168 bpt" {...Flex168Props} {...Flex168Cb} {...Flex168IoProps}>
<Image1 className="p-About Image68 bpt" {...Image68Props} {...Image68Cb} {...Image68IoProps}/>
<TextBox1 className="p-About TextBox139 bpt" {...TextBox139Props} {...TextBox139Cb} {...TextBox139IoProps}/>
</Flex1>
</Flex1>
</Flex1>
<Flex1 className="p-About Flex173 bpt" {...Flex173Props} {...Flex173Cb} {...Flex173IoProps}>
<TextBox1 className="p-About TextBox145 bpt" {...TextBox145Props} {...TextBox145Cb} {...TextBox145IoProps}/>
<TextBox1 className="p-About TextBox144 bpt" {...TextBox144Props} {...TextBox144Cb} {...TextBox144IoProps}/>
<TextBox1 className="p-About TextBox143 bpt" {...TextBox143Props} {...TextBox143Cb} {...TextBox143IoProps}/>
<Flex1 className="p-About Flex171 bpt" {...Flex171Props} {...Flex171Cb} {...Flex171IoProps}>
<Button1 className="p-About Button16 bpt" {...Button16Props} {...Button16Cb} {...Button16IoProps}/>
<Button1 className="p-About Button17 bpt" {...Button17Props} {...Button17Cb} {...Button17IoProps}/>
</Flex1>
</Flex1>
</Flex1>
  </>);
}
