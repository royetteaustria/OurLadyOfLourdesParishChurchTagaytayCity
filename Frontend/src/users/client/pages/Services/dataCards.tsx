import { LiaBibleSolid } from 'react-icons/lia'
import { GiCupidonArrow } from 'react-icons/gi'
import { MdOutlineBabyChangingStation } from "react-icons/md";

export const cards = [
    {
      name: 'Wedding Services',
      description: 'This Christian marriage service reflects a sacred covenant within a worship setting akin to a Sunday service, emphasizing its Christian significance.',
      link: '',
      icon: <GiCupidonArrow fill={'#3C50E0'} size={20}/>,
      path: '/weddingreservation'
    },
    {
      name: 'Baptismal Services',
      description: 'Baptism, the initial sacrament of Catholicism, marks the entry into the faith, providing justifying and sanctifying grace, and initiating the recipient into the body of Christ, the Catholic Church, with the indwelling of the Holy Spirit.',
      link: '',
      icon: <MdOutlineBabyChangingStation fill={'#3C50E0'} size={20}/>,
      path: '/baptismalreservation'
    },
    {
      name: 'Mass Services',
      description: 'In Mass, we worship the Triune God through prayers, hymns, Bible readings, a sermon, and the Eucharist, expressing gratitude to the Father and commemorating Christ\'s sacrifice with the guidance of his word and Spirit.',
      link: '',
      icon: <LiaBibleSolid fill={'#3C50E0'} size={20}/>,
      path: '/massreservation'
    },
  ];