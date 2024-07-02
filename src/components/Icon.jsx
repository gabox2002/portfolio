import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { library } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons"
import { fas } from "@fortawesome/free-solid-svg-icons"

library.add(fab, fas);

function Icon({ icon }) {
    return <FontAwesomeIcon icon={icon} className="fa-icon" />;
}

export default Icon
