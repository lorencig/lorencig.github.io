// src/data/publications.ts
import { PublicationData } from '@/common/types';

export const allPublicationsData: PublicationData[] = [
  {
    id: 1,
    title: "AU OPC Interface",
    authors: "Lorenci Gjurgjaj, Niccolò Silvestri, Erjon Hysa, Teresa Pellegrino",
    journal: "Zenodo",
    year: 2024,
    doi: "10.5281/zenodo.12799898",
    isFeatured: false,
    abstract: "This platform provides a versatile and user-friendly interface for controlling laboratory pumps via OPC UA protocol. Pumps are a critical component in fluidic systems, especially in laboratory-scale applications where precise control of fluid flow is essential. This application is specifically tailored for such applications, allowing users to automate and monitor the operation of pumps with ease and accuracy. The user can create and execute a sequence of actions for the pumps in a defined order." // Example abstract
  },
  {
    id: 2,
    title: "NanoDB: Research Activity Data Management System",
    authors: "Lorenci Gjurgjaj, Niccolò Silvestri, Erjon Hysa, Teresa Pellegrino",
    journal: "Zenodo",
    year: 2024,
    doi: "10.5281/zenodo.13912817",
    isFeatured: false,
    abstract: "NanoDB is a Python-based application developed to optimize the management of experimental data in research settings. Designed with flexibility in mind, it supports the collection, organization, and export of laboratory metadata across diverse research line types. Built on the FAIR principles, by ensuring clean and well-structured datasets, NanoDB also lays the foundation for integrating machine learning, enabling more advanced data analysis and modeling in future research stages."   },
  {
    id: 3,
    title: "Nanoplatforms for Magnetic-Photo-Heating of Thermo-Resistant Tumor Cells: Singular Synergic Therapeutic Effects at Mild Temperature",
    authors: "Binh T. Mai, Tamara Fernandez-Cabada, John S. Conteh, Giulia E.P. Nucci, Sergio Fiorito, Helena Gavilán, Doriana Debellis, Lorenci Gjurgjaj, Teresa Pellegrino",
    journal: "Small",
    year: 2024,
    doi: "10.1002/smll.202310522",
    isFeatured: true,
    abstract: "A self-assemble amphiphilic diblock copolymer that can incorporate iron oxide nanocubes (IONCs) in chain-like assemblies as heat mediators for magnetic hyperthermia (MHT) and tuneable amounts of IR780 dye as agent for photothermal therapy (PTT) is developed. MHT-heating performance of photobeads in viscous media have the same heat performances in water at magnetic field conditions of clinical use. Thanks to IR780, the photobeads are activated by infrared laser light within the first biological window (808 nm) with a significant enhancement of photo-stability of IR780 enabling the raise of the temperature at therapeutic values during multiple PTT cycles and showing unchanged optical features up to 8 days. Moreover, the photobeads fluorescent signal is preserved once internalized by glioblastoma multiforme (GBM) cells. Peculiarly, the photobeads are used as toxic agents to eradicate thermo-resistant GBM cells at mild heat, as low as 41 °C, with MHT and PTT both of clinical use. Indeed, a high U87 GBM cell mortality percentage is obtained only with dual MHT/PTT while each single treatment dose not provide the same cytotoxic effects. Only for the combined treatment, the cell death mechanism is assigned to clear sign of apoptosis as observed by structural/morphological cell studies and enhanced lysosome permeability."
  },
  // ... other publications, add abstracts where available
  {
    id: 4,
    title: "Changes in surface and structure of montmorillonite by acid activation",
    authors: "Altin Mele, Lorenci Gjurgjaj, Jeta Lica, Antonina Mema, Ardita Mele, Iris Çaçani, Jona Keri",
    journal: "Dental Materials",
    year: 2023,
    doi: "10.1016/j.dental.2023.08.068",
    isFeatured: false,
    abstract: "The sulfuric acid activation of Na-MMT used at a concentration of 28.9% yields the optimum results for the increase in Ssa and Vp by around 11-fold, compared to the untreated Na-MMT sample. The activated samples are thermally stable and partially crystalline."
  },
  {
    id: 5,
    title: "Polystyrene modification by cellulose derivative and organoclay",
    authors: "Lorenci Gjurgjaj, Enida Nushi, Altin Mele, Ardita Mele, Dorina Mele, Igli Qoshja",
    journal: "Acta Crystallographica Section A: Foundations and Advances",
    year: 2021,
    doi: "",
    link: "https://journals.iucr.org/a/issues/2021/a2/00/a60310/a60310.pdf",
    isFeatured: false,
    abstract: "Compounding of polystyrene (PS) with tetramethylsilyl cellulose (TMSi-Cell) and an organically modified montmorillonite (OMMMT) was carried out in two different ways. In the first way the PS of MW = 49000 and Mn = 32000 was solved in toluene, than mixed with the nanocomposite dispersion of TMSi-Cell/OM-MMT (10.5 %) in toluene and dried in an oven at 380 mbar/40°C for 20 hours. In the second way the bulk polymerization of PS was tried as a way to obtain PS/TMSi-Cell/OM-MMT nanocomposite. The polymerization followed in a mixture of styrene with TMSi-Cell/OM-MMT (10.5 %) in an oil bath at 80 °C for 4 hours and at 120 °C for 16 hours. Nanocomposites of TMSi-Cell/OM-MMT were firstly prepared by precipitation from toluene experimenting concentrations from 10.5 % to 29.35 % of OM-MMT to TMSi-Cell. The thermal properties of the nanocomposites, were investigated by thermogravimetry and the morphologies of these nanocomposites were evaluated through X-ray diffraction. The 10.50 % OMMMT/TMSi-Cell nanocomposite showed a completely exfoliated morphology. PS/TMSi-Cell/OM-MMT mixtures were characterized by X-Ray Diffraction, Thermogravimetry and Differential Scanning Calorimetry. Differences in the degradation temperature compared to pure PS show compounding."
  },
  {
    id: 6,
    title: "Refractory materials structural and surface changes by sulfuric acid treatment",
    authors: "Enida Nushi, Lorenci Gjurgjaj, Altin Mele",
    journal: "Acta Crystallographica Section A: Foundations and Advances",
    year: 2021,
    doi: "",
    link: "https://journals.iucr.org/a/issues/2021/a2/00/a60310/a60310.pdf",
    isFeatured: false,
    abstract: "Prrenjas clay mineral is used as refractory material in the metal casting and is found in southeast of Albania. It has a high content on bentonite. The influence of the sulphuric acid activation on the composition, structure and surface properties of Prrenjas clay mineral is investigated in this study by means of elemental chemical analysis, X-Ray Diffractometry, IR Spectroscopy and gas adsorption- desorption measurement. H2SO4 concentrations of 0.143 M, 0.232 M, 0.371 M, 0.537 M, 0.734 M, 0.927 M and 1.456 M were used in the treatment of samples. The treatment by increasing the acid concentration brings the leaching of Al3+, Fe2+, Mg2+ from the clay structure. The specific surface area and the pore volume of the clay samples increases respectively from 83 m2/g and 0.069 cm3/g for the untreated clay to 420 m2/g and 0.384 cm3/g for the clay mineral treated with 1.456 M H2SO4 solution. New mesopores were created during the acid activation mainly in the range of 2 – 8 nm. For the samples treated with 0.927 M and 1.456 M solutions the increase in specific surface area and pore volume is very high. The cationic exchange capacity decreases steadily with the concentration of H2SO4 used for the treatment."
  },
  {
    id: 7,
    title: "Solid state synthesis of hydroxyapatite from different precursors",
    authors: "Altin Mele, Lorenci Gjurgjaj, Jeta Lica, Antonina Mema, Ardita Mele, Iris Çaçani, Fejzi Keraj, Francesco Baldassarre, Dritan Siliqi",
    journal: "Dental Materials",
    year: 2023,
    doi: "10.1016/j.dental.2023.08.086",
    isFeatured: true,
    abstract: "The presence as second phase (in our case 10%) of β-TCP is known from the literature in SS syntheses, resulting possibly from the different precursors of synthesis. Aiming to produce HAp as pure as possible, precursors Calcium DiHydrogenPhosphate and Calcium carbonate and the temperature of 900⁰C seems optimal. Altering reaction times could further optimize the phases. SS synthesis at 900⁰C could be the proper route for the production of other cation substituted (Sr, Zn, Ag) HAp for dental applications."
  },
];