var documenterSearchIndex = {"docs":
[{"location":"usage/atom/#API","page":"Atomic","title":"API","text":"","category":"section"},{"location":"usage/atom/","page":"Atomic","title":"Atomic","text":"BcdiSimulate.atomSimulateElectricField(x, y, z, hRanges, kRanges, lRanges)\nBcdiSimulate.atomSimulateDiffraction(x, y, z, hRanges, kRanges, lRanges, numPhotons; seed=nothing)\nBcdiSimulate.relaxCrystal(x, y, z, lmpOptions, potentialName)","category":"page"},{"location":"usage/atom/#BcdiSimulate.atomSimulateElectricField-NTuple{6, Any}","page":"Atomic","title":"BcdiSimulate.atomSimulateElectricField","text":"atomSimulateElectricField(x, y, z, hRanges, kRanges, lRanges)\n\nSimulate the electric field for a group of atoms (x, y, and z) on a sequence of grids in reciprocal space (hRanges, kRanges, lRanges). More concretely, calculate\n\nF_hkl = e^- 2 pi i (x h + y k + z l)\n\nx, y, and z do not have to lie on any grid and are assumed to be Vector{Real}. 'hRanges', 'kRanges' and 'lRanges' are not individual points, but are Vector{StepRangeLen}, that together, define the grid to sample reciprocal space over. In general, this will be faster than a full discrete Fourier transform (with O(n^2) operations) because it uses an NUFFT.\n\n\n\n\n\n","category":"method"},{"location":"usage/atom/#BcdiSimulate.atomSimulateDiffraction-NTuple{7, Any}","page":"Atomic","title":"BcdiSimulate.atomSimulateDiffraction","text":"atomSimulateDiffraction(x, y, z, hRanges, kRanges, lRanges, numPhotons; seed=nothing)\n\nSimulate diffraction patterns for a group of atoms (x, y, and z) on a sequence of grids in reciprocal space (hRanges, kRanges, lRanges). More concretely, obtain samples from a Poisson distribution that satisfy\n\nI_hkl oversetindsim Pois(F_hkl)\n\nwhere \n\nF_hkl = e^- 2 pi i (x h + y k + z l)\n\nx, y, and z do not have to lie on any grid and are assumed to be Vector{Real}. 'hRanges', 'kRanges' and 'lRanges' are not individual points, but are Vector{StepRangeLen}, that together, define the grid to sample reciprocal space over. numPhotons defines the number of photons that will, on average, be simulated, and seed is the rng seed. In general,  this will be faster than a full discrete Fourier transform (with O(n^2) operations)  because it uses an NUFFT.\n\n\n\n\n\n","category":"method"},{"location":"usage/atom/#BcdiSimulate.relaxCrystal-NTuple{5, Any}","page":"Atomic","title":"BcdiSimulate.relaxCrystal","text":"relaxCrystal(x, y, z, lmpOptions, potentialName)\n\nUse LAMMPS to relax the supplied atom positions (x, y, and z). lmpOptions defines command line options to pass to LAMMPS and the potentialName defines the interatomic potential used in the LAMMPS relaxation.\n\n\n\n\n\n","category":"method"},{"location":"#BcdiSimulate.jl-Documentation","page":"BcdiSimulate","title":"BcdiSimulate.jl Documentation","text":"","category":"section"},{"location":"#About","page":"BcdiSimulate","title":"About","text":"","category":"section"},{"location":"","page":"BcdiSimulate","title":"BcdiSimulate","text":"Bragg Coherent Diffraction Imaging (BCDI) Simulate implements methods to simulate the BCDI problem. Currently, BcdiSimulate only implements atomic scale methods, we may expand these capabilities. ","category":"page"},{"location":"","page":"BcdiSimulate","title":"BcdiSimulate","text":"Currently, this entire package must be run with access to GPUs. This may change in the future (especially if Issues requesting it are opened), but for our research group, using GPUs is a necessity.","category":"page"},{"location":"#Installation","page":"BcdiSimulate","title":"Installation","text":"","category":"section"},{"location":"","page":"BcdiSimulate","title":"BcdiSimulate","text":"BcdiSimulate.jl is not registered in the Julia general registry and can be installed by running in the REPL package manager (]):","category":"page"},{"location":"","page":"BcdiSimulate","title":"BcdiSimulate","text":"add https://github.com/byu-cxi/BcdiMeso.jl.git","category":"page"}]
}
