export const mainCategory = [
  {
    name: "Periféricos",
    categoryId: "peripherals",
    level: 1,
    levelTwoCategory: [
      { name: "Teclados", categoryId: "keyboards", parentCategoryId: "peripherals", level: 2 },
      { name: "Ratones", categoryId: "mice", parentCategoryId: "peripherals", level: 2 },
      { name: "Monitores", categoryId: "monitors", parentCategoryId: "peripherals", level: 2 },
      { name: "Auriculares", categoryId: "headphones", parentCategoryId: "peripherals", level: 2 },
      { name: "Micrófonos", categoryId: "microphones", parentCategoryId: "peripherals", level: 2 }
    ]
  },
  {
    name: "Componentes",
    categoryId: "components",
    level: 1,
    levelTwoCategory: [
      { name: "Procesadores", categoryId: "processors", parentCategoryId: "components", level: 2 },
      { name: "Tarjetas Gráficas", categoryId: "graphics_cards", parentCategoryId: "components", level: 2 },
      { name: "Placas Base", categoryId: "motherboards", parentCategoryId: "components", level: 2 },
      { name: "Memorias RAM", categoryId: "ram", parentCategoryId: "components", level: 2 },
      { name: "Fuentes de Poder", categoryId: "power_supplies", parentCategoryId: "components", level: 2 }
    ]
  },
  {
    name: "Almacenamiento y Unidades Externas",
    categoryId: "storage",
    level: 1,
    levelTwoCategory: [
      { name: "Discos Duros", categoryId: "hard_drives", parentCategoryId: "storage", level: 2 },
      { name: "Unidades SSD", categoryId: "ssd_drives", parentCategoryId: "storage", level: 2 },
      { name: "Memorias USB", categoryId: "usb_drives", parentCategoryId: "storage", level: 2 },
      { name: "Tarjetas SD", categoryId: "sd_cards", parentCategoryId: "storage", level: 2 }
    ]
  },
  {
    name: "Accesorios",
    categoryId: "accessories",
    level: 1,
    levelTwoCategory: [
      { name: "Cables", categoryId: "cables", parentCategoryId: "accessories", level: 2 },
      { name: "Adaptadores", categoryId: "adapters", parentCategoryId: "accessories", level: 2 },
      { name: "Soportes", categoryId: "stands", parentCategoryId: "accessories", level: 2 },
      { name: "Limpieza", categoryId: "cleaning", parentCategoryId: "accessories", level: 2 }
    ]
  }
];
