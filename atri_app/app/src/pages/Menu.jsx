import { useLayoutEffect, useEffect } from "react";
import useStore, { updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { Flex as Flex2 } from "@atrilabs/react-component-manifests/src/manifests/Flex/Flex.tsx";
import { TextBox as TextBox2 } from "@atrilabs/react-component-manifests/src/manifests/TextBox/TextBox.tsx";
import { Image as Image2 } from "@atrilabs/react-component-manifests/src/manifests/Image/Image.tsx";
import { Button as Button2 } from "@atrilabs/react-component-manifests/src/manifests/Button/Button.tsx";
import { useFlex206Cb, useFlex205Cb, useFlex202Cb, useFlex198Cb, useFlex190Cb, useFlex182Cb, useFlex176Cb, useFlex191Cb, useFlex183Cb, useFlex177Cb, useFlex199Cb, useFlex192Cb, useFlex184Cb, useFlex178Cb, useFlex193Cb, useFlex185Cb, useFlex203Cb, useFlex204Cb, useFlex200Cb, useFlex194Cb, useFlex186Cb, useFlex195Cb, useFlex187Cb, useFlex179Cb, useFlex201Cb, useFlex196Cb, useFlex188Cb, useFlex180Cb, useFlex197Cb, useFlex189Cb, useFlex181Cb, useTextBox170Cb, useTextBox171Cb, useTextBox152Cb, useTextBox153Cb, useImage72Cb, useTextBox146Cb, useTextBox154Cb, useTextBox155Cb, useImage73Cb, useTextBox147Cb, useTextBox156Cb, useTextBox157Cb, useImage74Cb, useTextBox148Cb, useTextBox166Cb, useTextBox167Cb, useImage78Cb, useTextBox158Cb, useButton18Cb, useButton19Cb, useImage79Cb, useTextBox168Cb, useTextBox169Cb, useTextBox159Cb, useImage75Cb, useTextBox160Cb, useTextBox161Cb, useTextBox149Cb, useImage76Cb, useTextBox162Cb, useTextBox163Cb, useTextBox150Cb, useImage77Cb, useTextBox164Cb, useTextBox165Cb, useTextBox151Cb } from "../page-cbs/Menu";
import "../page-css/Menu.css";
import "../custom/Menu";

export default function Menu() {
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

  const Flex206Props = useStore((state)=>state["Menu"]["Flex206"]);
const Flex206IoProps = useIoStore((state)=>state["Menu"]["Flex206"]);
const Flex206Cb = useFlex206Cb()
const Flex205Props = useStore((state)=>state["Menu"]["Flex205"]);
const Flex205IoProps = useIoStore((state)=>state["Menu"]["Flex205"]);
const Flex205Cb = useFlex205Cb()
const Flex202Props = useStore((state)=>state["Menu"]["Flex202"]);
const Flex202IoProps = useIoStore((state)=>state["Menu"]["Flex202"]);
const Flex202Cb = useFlex202Cb()
const Flex198Props = useStore((state)=>state["Menu"]["Flex198"]);
const Flex198IoProps = useIoStore((state)=>state["Menu"]["Flex198"]);
const Flex198Cb = useFlex198Cb()
const Flex190Props = useStore((state)=>state["Menu"]["Flex190"]);
const Flex190IoProps = useIoStore((state)=>state["Menu"]["Flex190"]);
const Flex190Cb = useFlex190Cb()
const Flex182Props = useStore((state)=>state["Menu"]["Flex182"]);
const Flex182IoProps = useIoStore((state)=>state["Menu"]["Flex182"]);
const Flex182Cb = useFlex182Cb()
const Flex176Props = useStore((state)=>state["Menu"]["Flex176"]);
const Flex176IoProps = useIoStore((state)=>state["Menu"]["Flex176"]);
const Flex176Cb = useFlex176Cb()
const Flex191Props = useStore((state)=>state["Menu"]["Flex191"]);
const Flex191IoProps = useIoStore((state)=>state["Menu"]["Flex191"]);
const Flex191Cb = useFlex191Cb()
const Flex183Props = useStore((state)=>state["Menu"]["Flex183"]);
const Flex183IoProps = useIoStore((state)=>state["Menu"]["Flex183"]);
const Flex183Cb = useFlex183Cb()
const Flex177Props = useStore((state)=>state["Menu"]["Flex177"]);
const Flex177IoProps = useIoStore((state)=>state["Menu"]["Flex177"]);
const Flex177Cb = useFlex177Cb()
const Flex199Props = useStore((state)=>state["Menu"]["Flex199"]);
const Flex199IoProps = useIoStore((state)=>state["Menu"]["Flex199"]);
const Flex199Cb = useFlex199Cb()
const Flex192Props = useStore((state)=>state["Menu"]["Flex192"]);
const Flex192IoProps = useIoStore((state)=>state["Menu"]["Flex192"]);
const Flex192Cb = useFlex192Cb()
const Flex184Props = useStore((state)=>state["Menu"]["Flex184"]);
const Flex184IoProps = useIoStore((state)=>state["Menu"]["Flex184"]);
const Flex184Cb = useFlex184Cb()
const Flex178Props = useStore((state)=>state["Menu"]["Flex178"]);
const Flex178IoProps = useIoStore((state)=>state["Menu"]["Flex178"]);
const Flex178Cb = useFlex178Cb()
const Flex193Props = useStore((state)=>state["Menu"]["Flex193"]);
const Flex193IoProps = useIoStore((state)=>state["Menu"]["Flex193"]);
const Flex193Cb = useFlex193Cb()
const Flex185Props = useStore((state)=>state["Menu"]["Flex185"]);
const Flex185IoProps = useIoStore((state)=>state["Menu"]["Flex185"]);
const Flex185Cb = useFlex185Cb()
const Flex203Props = useStore((state)=>state["Menu"]["Flex203"]);
const Flex203IoProps = useIoStore((state)=>state["Menu"]["Flex203"]);
const Flex203Cb = useFlex203Cb()
const Flex204Props = useStore((state)=>state["Menu"]["Flex204"]);
const Flex204IoProps = useIoStore((state)=>state["Menu"]["Flex204"]);
const Flex204Cb = useFlex204Cb()
const Flex200Props = useStore((state)=>state["Menu"]["Flex200"]);
const Flex200IoProps = useIoStore((state)=>state["Menu"]["Flex200"]);
const Flex200Cb = useFlex200Cb()
const Flex194Props = useStore((state)=>state["Menu"]["Flex194"]);
const Flex194IoProps = useIoStore((state)=>state["Menu"]["Flex194"]);
const Flex194Cb = useFlex194Cb()
const Flex186Props = useStore((state)=>state["Menu"]["Flex186"]);
const Flex186IoProps = useIoStore((state)=>state["Menu"]["Flex186"]);
const Flex186Cb = useFlex186Cb()
const Flex195Props = useStore((state)=>state["Menu"]["Flex195"]);
const Flex195IoProps = useIoStore((state)=>state["Menu"]["Flex195"]);
const Flex195Cb = useFlex195Cb()
const Flex187Props = useStore((state)=>state["Menu"]["Flex187"]);
const Flex187IoProps = useIoStore((state)=>state["Menu"]["Flex187"]);
const Flex187Cb = useFlex187Cb()
const Flex179Props = useStore((state)=>state["Menu"]["Flex179"]);
const Flex179IoProps = useIoStore((state)=>state["Menu"]["Flex179"]);
const Flex179Cb = useFlex179Cb()
const Flex201Props = useStore((state)=>state["Menu"]["Flex201"]);
const Flex201IoProps = useIoStore((state)=>state["Menu"]["Flex201"]);
const Flex201Cb = useFlex201Cb()
const Flex196Props = useStore((state)=>state["Menu"]["Flex196"]);
const Flex196IoProps = useIoStore((state)=>state["Menu"]["Flex196"]);
const Flex196Cb = useFlex196Cb()
const Flex188Props = useStore((state)=>state["Menu"]["Flex188"]);
const Flex188IoProps = useIoStore((state)=>state["Menu"]["Flex188"]);
const Flex188Cb = useFlex188Cb()
const Flex180Props = useStore((state)=>state["Menu"]["Flex180"]);
const Flex180IoProps = useIoStore((state)=>state["Menu"]["Flex180"]);
const Flex180Cb = useFlex180Cb()
const Flex197Props = useStore((state)=>state["Menu"]["Flex197"]);
const Flex197IoProps = useIoStore((state)=>state["Menu"]["Flex197"]);
const Flex197Cb = useFlex197Cb()
const Flex189Props = useStore((state)=>state["Menu"]["Flex189"]);
const Flex189IoProps = useIoStore((state)=>state["Menu"]["Flex189"]);
const Flex189Cb = useFlex189Cb()
const Flex181Props = useStore((state)=>state["Menu"]["Flex181"]);
const Flex181IoProps = useIoStore((state)=>state["Menu"]["Flex181"]);
const Flex181Cb = useFlex181Cb()
const TextBox170Props = useStore((state)=>state["Menu"]["TextBox170"]);
const TextBox170IoProps = useIoStore((state)=>state["Menu"]["TextBox170"]);
const TextBox170Cb = useTextBox170Cb()
const TextBox171Props = useStore((state)=>state["Menu"]["TextBox171"]);
const TextBox171IoProps = useIoStore((state)=>state["Menu"]["TextBox171"]);
const TextBox171Cb = useTextBox171Cb()
const TextBox152Props = useStore((state)=>state["Menu"]["TextBox152"]);
const TextBox152IoProps = useIoStore((state)=>state["Menu"]["TextBox152"]);
const TextBox152Cb = useTextBox152Cb()
const TextBox153Props = useStore((state)=>state["Menu"]["TextBox153"]);
const TextBox153IoProps = useIoStore((state)=>state["Menu"]["TextBox153"]);
const TextBox153Cb = useTextBox153Cb()
const Image72Props = useStore((state)=>state["Menu"]["Image72"]);
const Image72IoProps = useIoStore((state)=>state["Menu"]["Image72"]);
const Image72Cb = useImage72Cb()
const TextBox146Props = useStore((state)=>state["Menu"]["TextBox146"]);
const TextBox146IoProps = useIoStore((state)=>state["Menu"]["TextBox146"]);
const TextBox146Cb = useTextBox146Cb()
const TextBox154Props = useStore((state)=>state["Menu"]["TextBox154"]);
const TextBox154IoProps = useIoStore((state)=>state["Menu"]["TextBox154"]);
const TextBox154Cb = useTextBox154Cb()
const TextBox155Props = useStore((state)=>state["Menu"]["TextBox155"]);
const TextBox155IoProps = useIoStore((state)=>state["Menu"]["TextBox155"]);
const TextBox155Cb = useTextBox155Cb()
const Image73Props = useStore((state)=>state["Menu"]["Image73"]);
const Image73IoProps = useIoStore((state)=>state["Menu"]["Image73"]);
const Image73Cb = useImage73Cb()
const TextBox147Props = useStore((state)=>state["Menu"]["TextBox147"]);
const TextBox147IoProps = useIoStore((state)=>state["Menu"]["TextBox147"]);
const TextBox147Cb = useTextBox147Cb()
const TextBox156Props = useStore((state)=>state["Menu"]["TextBox156"]);
const TextBox156IoProps = useIoStore((state)=>state["Menu"]["TextBox156"]);
const TextBox156Cb = useTextBox156Cb()
const TextBox157Props = useStore((state)=>state["Menu"]["TextBox157"]);
const TextBox157IoProps = useIoStore((state)=>state["Menu"]["TextBox157"]);
const TextBox157Cb = useTextBox157Cb()
const Image74Props = useStore((state)=>state["Menu"]["Image74"]);
const Image74IoProps = useIoStore((state)=>state["Menu"]["Image74"]);
const Image74Cb = useImage74Cb()
const TextBox148Props = useStore((state)=>state["Menu"]["TextBox148"]);
const TextBox148IoProps = useIoStore((state)=>state["Menu"]["TextBox148"]);
const TextBox148Cb = useTextBox148Cb()
const TextBox166Props = useStore((state)=>state["Menu"]["TextBox166"]);
const TextBox166IoProps = useIoStore((state)=>state["Menu"]["TextBox166"]);
const TextBox166Cb = useTextBox166Cb()
const TextBox167Props = useStore((state)=>state["Menu"]["TextBox167"]);
const TextBox167IoProps = useIoStore((state)=>state["Menu"]["TextBox167"]);
const TextBox167Cb = useTextBox167Cb()
const Image78Props = useStore((state)=>state["Menu"]["Image78"]);
const Image78IoProps = useIoStore((state)=>state["Menu"]["Image78"]);
const Image78Cb = useImage78Cb()
const TextBox158Props = useStore((state)=>state["Menu"]["TextBox158"]);
const TextBox158IoProps = useIoStore((state)=>state["Menu"]["TextBox158"]);
const TextBox158Cb = useTextBox158Cb()
const Button18Props = useStore((state)=>state["Menu"]["Button18"]);
const Button18IoProps = useIoStore((state)=>state["Menu"]["Button18"]);
const Button18Cb = useButton18Cb()
const Button19Props = useStore((state)=>state["Menu"]["Button19"]);
const Button19IoProps = useIoStore((state)=>state["Menu"]["Button19"]);
const Button19Cb = useButton19Cb()
const Image79Props = useStore((state)=>state["Menu"]["Image79"]);
const Image79IoProps = useIoStore((state)=>state["Menu"]["Image79"]);
const Image79Cb = useImage79Cb()
const TextBox168Props = useStore((state)=>state["Menu"]["TextBox168"]);
const TextBox168IoProps = useIoStore((state)=>state["Menu"]["TextBox168"]);
const TextBox168Cb = useTextBox168Cb()
const TextBox169Props = useStore((state)=>state["Menu"]["TextBox169"]);
const TextBox169IoProps = useIoStore((state)=>state["Menu"]["TextBox169"]);
const TextBox169Cb = useTextBox169Cb()
const TextBox159Props = useStore((state)=>state["Menu"]["TextBox159"]);
const TextBox159IoProps = useIoStore((state)=>state["Menu"]["TextBox159"]);
const TextBox159Cb = useTextBox159Cb()
const Image75Props = useStore((state)=>state["Menu"]["Image75"]);
const Image75IoProps = useIoStore((state)=>state["Menu"]["Image75"]);
const Image75Cb = useImage75Cb()
const TextBox160Props = useStore((state)=>state["Menu"]["TextBox160"]);
const TextBox160IoProps = useIoStore((state)=>state["Menu"]["TextBox160"]);
const TextBox160Cb = useTextBox160Cb()
const TextBox161Props = useStore((state)=>state["Menu"]["TextBox161"]);
const TextBox161IoProps = useIoStore((state)=>state["Menu"]["TextBox161"]);
const TextBox161Cb = useTextBox161Cb()
const TextBox149Props = useStore((state)=>state["Menu"]["TextBox149"]);
const TextBox149IoProps = useIoStore((state)=>state["Menu"]["TextBox149"]);
const TextBox149Cb = useTextBox149Cb()
const Image76Props = useStore((state)=>state["Menu"]["Image76"]);
const Image76IoProps = useIoStore((state)=>state["Menu"]["Image76"]);
const Image76Cb = useImage76Cb()
const TextBox162Props = useStore((state)=>state["Menu"]["TextBox162"]);
const TextBox162IoProps = useIoStore((state)=>state["Menu"]["TextBox162"]);
const TextBox162Cb = useTextBox162Cb()
const TextBox163Props = useStore((state)=>state["Menu"]["TextBox163"]);
const TextBox163IoProps = useIoStore((state)=>state["Menu"]["TextBox163"]);
const TextBox163Cb = useTextBox163Cb()
const TextBox150Props = useStore((state)=>state["Menu"]["TextBox150"]);
const TextBox150IoProps = useIoStore((state)=>state["Menu"]["TextBox150"]);
const TextBox150Cb = useTextBox150Cb()
const Image77Props = useStore((state)=>state["Menu"]["Image77"]);
const Image77IoProps = useIoStore((state)=>state["Menu"]["Image77"]);
const Image77Cb = useImage77Cb()
const TextBox164Props = useStore((state)=>state["Menu"]["TextBox164"]);
const TextBox164IoProps = useIoStore((state)=>state["Menu"]["TextBox164"]);
const TextBox164Cb = useTextBox164Cb()
const TextBox165Props = useStore((state)=>state["Menu"]["TextBox165"]);
const TextBox165IoProps = useIoStore((state)=>state["Menu"]["TextBox165"]);
const TextBox165Cb = useTextBox165Cb()
const TextBox151Props = useStore((state)=>state["Menu"]["TextBox151"]);
const TextBox151IoProps = useIoStore((state)=>state["Menu"]["TextBox151"]);
const TextBox151Cb = useTextBox151Cb()

  return (<>
  <Flex2 className="p-Menu Flex206 bpt" {...Flex206Props} {...Flex206Cb} {...Flex206IoProps}>
<TextBox2 className="p-Menu TextBox171 bpt" {...TextBox171Props} {...TextBox171Cb} {...TextBox171IoProps}/>
<TextBox2 className="p-Menu TextBox170 bpt" {...TextBox170Props} {...TextBox170Cb} {...TextBox170IoProps}/>
<Flex2 className="p-Menu Flex205 bpt" {...Flex205Props} {...Flex205Cb} {...Flex205IoProps}>
<Flex2 className="p-Menu Flex204 bpt" {...Flex204Props} {...Flex204Cb} {...Flex204IoProps}>
<Flex2 className="p-Menu Flex201 bpt" {...Flex201Props} {...Flex201Cb} {...Flex201IoProps}>
<Flex2 className="p-Menu Flex197 bpt" {...Flex197Props} {...Flex197Cb} {...Flex197IoProps}>
<Flex2 className="p-Menu Flex189 bpt" {...Flex189Props} {...Flex189Cb} {...Flex189IoProps}>
<Flex2 className="p-Menu Flex181 bpt" {...Flex181Props} {...Flex181Cb} {...Flex181IoProps}>
<TextBox2 className="p-Menu TextBox151 bpt" {...TextBox151Props} {...TextBox151Cb} {...TextBox151IoProps}/>
</Flex2>
<Image2 className="p-Menu Image77 bpt" {...Image77Props} {...Image77Cb} {...Image77IoProps}/>
<TextBox2 className="p-Menu TextBox164 bpt" {...TextBox164Props} {...TextBox164Cb} {...TextBox164IoProps}/>
<TextBox2 className="p-Menu TextBox165 bpt" {...TextBox165Props} {...TextBox165Cb} {...TextBox165IoProps}/>
</Flex2>
</Flex2>
<Flex2 className="p-Menu Flex196 bpt" {...Flex196Props} {...Flex196Cb} {...Flex196IoProps}>
<Flex2 className="p-Menu Flex188 bpt" {...Flex188Props} {...Flex188Cb} {...Flex188IoProps}>
<Flex2 className="p-Menu Flex180 bpt" {...Flex180Props} {...Flex180Cb} {...Flex180IoProps}>
<TextBox2 className="p-Menu TextBox150 bpt" {...TextBox150Props} {...TextBox150Cb} {...TextBox150IoProps}/>
</Flex2>
<Image2 className="p-Menu Image76 bpt" {...Image76Props} {...Image76Cb} {...Image76IoProps}/>
<TextBox2 className="p-Menu TextBox162 bpt" {...TextBox162Props} {...TextBox162Cb} {...TextBox162IoProps}/>
<TextBox2 className="p-Menu TextBox163 bpt" {...TextBox163Props} {...TextBox163Cb} {...TextBox163IoProps}/>
</Flex2>
</Flex2>
</Flex2>
<Flex2 className="p-Menu Flex200 bpt" {...Flex200Props} {...Flex200Cb} {...Flex200IoProps}>
<Flex2 className="p-Menu Flex195 bpt" {...Flex195Props} {...Flex195Cb} {...Flex195IoProps}>
<Flex2 className="p-Menu Flex187 bpt" {...Flex187Props} {...Flex187Cb} {...Flex187IoProps}>
<Flex2 className="p-Menu Flex179 bpt" {...Flex179Props} {...Flex179Cb} {...Flex179IoProps}>
<TextBox2 className="p-Menu TextBox149 bpt" {...TextBox149Props} {...TextBox149Cb} {...TextBox149IoProps}/>
</Flex2>
<Image2 className="p-Menu Image75 bpt" {...Image75Props} {...Image75Cb} {...Image75IoProps}/>
<TextBox2 className="p-Menu TextBox160 bpt" {...TextBox160Props} {...TextBox160Cb} {...TextBox160IoProps}/>
<TextBox2 className="p-Menu TextBox161 bpt" {...TextBox161Props} {...TextBox161Cb} {...TextBox161IoProps}/>
</Flex2>
</Flex2>
<Flex2 className="p-Menu Flex194 bpt" {...Flex194Props} {...Flex194Cb} {...Flex194IoProps}>
<Flex2 className="p-Menu Flex186 bpt" {...Flex186Props} {...Flex186Cb} {...Flex186IoProps}>
<TextBox2 className="p-Menu TextBox159 bpt" {...TextBox159Props} {...TextBox159Cb} {...TextBox159IoProps}/>
</Flex2>
<Image2 className="p-Menu Image79 bpt" {...Image79Props} {...Image79Cb} {...Image79IoProps}/>
<TextBox2 className="p-Menu TextBox168 bpt" {...TextBox168Props} {...TextBox168Cb} {...TextBox168IoProps}/>
<TextBox2 className="p-Menu TextBox169 bpt" {...TextBox169Props} {...TextBox169Cb} {...TextBox169IoProps}/>
</Flex2>
</Flex2>
</Flex2>
<Flex2 className="p-Menu Flex202 bpt" {...Flex202Props} {...Flex202Cb} {...Flex202IoProps}>
<Flex2 className="p-Menu Flex198 bpt" {...Flex198Props} {...Flex198Cb} {...Flex198IoProps}>
<Flex2 className="p-Menu Flex190 bpt" {...Flex190Props} {...Flex190Cb} {...Flex190IoProps}>
<Flex2 className="p-Menu Flex182 bpt" {...Flex182Props} {...Flex182Cb} {...Flex182IoProps}>
<Flex2 className="p-Menu Flex176 bpt" {...Flex176Props} {...Flex176Cb} {...Flex176IoProps}>
<TextBox2 className="p-Menu TextBox146 bpt" {...TextBox146Props} {...TextBox146Cb} {...TextBox146IoProps}/>
</Flex2>
<Image2 className="p-Menu Image72 bpt" {...Image72Props} {...Image72Cb} {...Image72IoProps}/>
<TextBox2 className="p-Menu TextBox153 bpt" {...TextBox153Props} {...TextBox153Cb} {...TextBox153IoProps}/>
<TextBox2 className="p-Menu TextBox152 bpt" {...TextBox152Props} {...TextBox152Cb} {...TextBox152IoProps}/>
</Flex2>
</Flex2>
<Flex2 className="p-Menu Flex191 bpt" {...Flex191Props} {...Flex191Cb} {...Flex191IoProps}>
<Flex2 className="p-Menu Flex183 bpt" {...Flex183Props} {...Flex183Cb} {...Flex183IoProps}>
<Flex2 className="p-Menu Flex177 bpt" {...Flex177Props} {...Flex177Cb} {...Flex177IoProps}>
<TextBox2 className="p-Menu TextBox147 bpt" {...TextBox147Props} {...TextBox147Cb} {...TextBox147IoProps}/>
</Flex2>
<Image2 className="p-Menu Image73 bpt" {...Image73Props} {...Image73Cb} {...Image73IoProps}/>
<TextBox2 className="p-Menu TextBox155 bpt" {...TextBox155Props} {...TextBox155Cb} {...TextBox155IoProps}/>
<TextBox2 className="p-Menu TextBox154 bpt" {...TextBox154Props} {...TextBox154Cb} {...TextBox154IoProps}/>
</Flex2>
</Flex2>
</Flex2>
<Flex2 className="p-Menu Flex199 bpt" {...Flex199Props} {...Flex199Cb} {...Flex199IoProps}>
<Flex2 className="p-Menu Flex192 bpt" {...Flex192Props} {...Flex192Cb} {...Flex192IoProps}>
<Flex2 className="p-Menu Flex184 bpt" {...Flex184Props} {...Flex184Cb} {...Flex184IoProps}>
<Flex2 className="p-Menu Flex178 bpt" {...Flex178Props} {...Flex178Cb} {...Flex178IoProps}>
<TextBox2 className="p-Menu TextBox148 bpt" {...TextBox148Props} {...TextBox148Cb} {...TextBox148IoProps}/>
</Flex2>
<Image2 className="p-Menu Image74 bpt" {...Image74Props} {...Image74Cb} {...Image74IoProps}/>
<TextBox2 className="p-Menu TextBox157 bpt" {...TextBox157Props} {...TextBox157Cb} {...TextBox157IoProps}/>
<TextBox2 className="p-Menu TextBox156 bpt" {...TextBox156Props} {...TextBox156Cb} {...TextBox156IoProps}/>
</Flex2>
</Flex2>
<Flex2 className="p-Menu Flex193 bpt" {...Flex193Props} {...Flex193Cb} {...Flex193IoProps}>
<Flex2 className="p-Menu Flex185 bpt" {...Flex185Props} {...Flex185Cb} {...Flex185IoProps}>
<TextBox2 className="p-Menu TextBox158 bpt" {...TextBox158Props} {...TextBox158Cb} {...TextBox158IoProps}/>
</Flex2>
<Image2 className="p-Menu Image78 bpt" {...Image78Props} {...Image78Cb} {...Image78IoProps}/>
<TextBox2 className="p-Menu TextBox167 bpt" {...TextBox167Props} {...TextBox167Cb} {...TextBox167IoProps}/>
<TextBox2 className="p-Menu TextBox166 bpt" {...TextBox166Props} {...TextBox166Cb} {...TextBox166IoProps}/>
</Flex2>
</Flex2>
</Flex2>
<Flex2 className="p-Menu Flex203 bpt" {...Flex203Props} {...Flex203Cb} {...Flex203IoProps}>
<Button2 className="p-Menu Button19 bpt" {...Button19Props} {...Button19Cb} {...Button19IoProps}/>
<Button2 className="p-Menu Button18 bpt" {...Button18Props} {...Button18Cb} {...Button18IoProps}/>
</Flex2>
</Flex2>
</Flex2>
  </>);
}
