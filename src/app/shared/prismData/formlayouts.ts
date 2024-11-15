export let layoutsTS1 = 
`     <div class="mb-4">
<label for="form-text" class="form-label !text-[.875rem] text-black">Enter name</label>
<input type="text" class="form-control" id="form-text" placeholder="">
</div>
<div class="mb-4">
<label for="form-password" class="form-label text-[.875rem] text-black">Enter
    Password</label>
<input type="password" class="form-control" id="form-password" placeholder="">
</div>
<div class="form-check mb-4">
<input class="form-check-input" type="checkbox" value="" id="invalidCheck"
   required>
<label class="form-check-label" for="invalidCheck">
    Accept Policy
</label>
</div>
<button class="ti-btn ti-btn-primary-full" type="submit">Submit</button>`
export let layoutsTS2 = 
`   <form>
<div class="grid grid-cols-12 mb-4">
    <label for="inputEmail3"
        class="sm:col-span-2 col-span-12 col-form-label">Email</label>
    <div class="sm:col-span-10 col-span-12">
        <input type="email" class="form-control" id="inputEmail3">
    </div>
</div>
<div class="grid grid-cols-12 mb-4">
    <label for="inputPassword3"
        class="sm:col-span-2 col-span-12 col-form-label">Password</label>
    <div class="sm:col-span-10 col-span-12">
        <input type="password" class="form-control" id="inputPassword3">
    </div>
</div>
<div class="grid grid-cols-12 mb-4">
    <div class=" sm:col-span-2 col-span-12 col-form-label pt-0">Qualified</div>
    <div class="sm:col-span-10 col-span-12 ">
        <div class="form-check">
            <input class="form-check-input" type="radio"
                name="gridRadios" id="gridRadios1" value="option1"
                checked>
            <label class="form-check-label" for="gridRadios1">
                Prelims
            </label>
        </div>
        <div class="form-check disabled">
            <input class="form-check-input" type="radio"
                name="gridRadios" id="gridRadios2" value="option3"
                disabled>
            <label class="form-check-label" for="gridRadios2">
                Mains
            </label>
        </div>
        <div class="form-check">
            <input class="form-check-input" type="checkbox"
                id="gridCheck1">
            <label class="form-check-label" for="gridCheck1">
                Certified
            </label>
        </div>
    </div>
</div>
<button type="submit" class="ti-btn ti-btn-primary-full">Sign in</button>
</form>`
export let layoutsTS3 = 
`    <div class="box">
<div class="box-header justify-between">
    <div class="box-title">
        Vertical Forms with icon
    </div>
    <div class="prism-toggle">
        <button type="button" class="ti-btn !py-1 !px-2 ti-btn-primary !text-[0.75rem] !font-medium">Show Code<i class="ri-code-line ms-2 inline-block align-middle"></i></button>
    </div>
</div>
<div class="box-body">
    <div class="mb-4">
        <label for="form-text1" class="form-label text-[.875rem] text-black">Enter name</label>
        <div class="input-group">
            <div class="input-group-text"><i class="ri-user-line"></i></div>
            <input type="text" class="form-control" id="form-text1" placeholder="">
        </div>
    </div>
    <div class="mb-4">
        <label for="form-password1" class="form-label text-[.875rem] text-black">Enter
            Password</label>
        <div class="input-group">
            <div class="input-group-text"><i class="ri-lock-line"></i></div>
            <input type="password" class="form-control" id="form-password1" placeholder="">
        </div>
    </div>
    <div class="form-check mb-4">
        <input class="form-check-input" type="checkbox" value="" id="invalidCheck1"
           required>
        <label class="form-check-label" for="invalidCheck1">
            Accept Policy
        </label>
    </div>
    <button class="ti-btn ti-btn-primary-full !mb-0 mt-4" type="submit">Submit</button>
</div>
<div class="box-footer border-t-0">
<!-- Prism Code -->
<pre class="language-html"><code class="language-html">
&lt;div class="mb-4"&gt;
&lt;label for="form-text1" class="form-label text-[.875rem] text-black"&gt;Enter name&lt;/label&gt;
&lt;div class="input-group"&gt;
&lt;div class="input-group-text"&gt;&lt;i class="ri-user-line"&gt;&lt;/i&gt;&lt;/div&gt;
&lt;input type="text" class="form-control" id="form-text1" placeholder=""&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;div class="mb-4"&gt;
&lt;label for="form-password1" class="form-label text-[.875rem] text-black"&gt;Enter
Password&lt;/label&gt;
&lt;div class="input-group"&gt;
&lt;div class="input-group-text"&gt;&lt;i class="ri-lock-line"&gt;&lt;/i&gt;&lt;/div&gt;
&lt;input type="password" class="form-control" id="form-password1" placeholder=""&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;div class="form-check mb-4"&gt;
&lt;input class="form-check-input" type="checkbox" value="" id="invalidCheck1"
required&gt;
&lt;label class="form-check-label" for="invalidCheck1"&gt;
Accept Policy
&lt;/label&gt;
&lt;/div&gt;
&lt;button class="ti-btn ti-btn-primary-full !mb-0 mt-4" type="submit"&gt;Submit&lt;/button&gt;</code></pre>
<!-- Prism Code -->
</div>
</div>`
export let layoutsTS4 =
`        <form>
<div class="grid grid-cols-12 mb-4">
    <label for="inputEmail1"
        class="sm:col-span-2 col-span-12 col-form-label">Email</label>
    <div class="sm:col-span-10 col-span-12">
        <div class="input-group">
            <input type="email" class="form-control" id="inputEmail1">
            <div class="input-group-text">
                <i class="ri-mail-line"></i>
            </div>
        </div>
    </div>
</div>
<div class="grid grid-cols-12 mb-4">
    <label for="inputPassword1"
        class="sm:col-span-2 col-span-12 col-form-label">Password</label>
    <div class="sm:col-span-10 col-span-12">
        <div class="input-group">
            <input type="password" class="form-control" id="inputPassword1">
            <div class="input-group-text">
                <i class="ri-lock-line"></i>
            </div>
        </div>
    </div>
</div>
<div class="grid grid-cols-12 mb-4">
    <div class="col-form-label sm:col-span-2 col-span-12 pt-0">Qualified</div>
    <div class="sm:col-span-10 col-span-12">
        <div class="form-check">
            <input class="form-check-input" type="radio"
                name="gridRadios" id="gridRadios4" value="option1"
                checked>
            <label class="form-check-label" for="gridRadios4">
                Prelims
            </label>
        </div>
        <div class="form-check disabled">
            <input class="form-check-input" type="radio"
                name="gridRadios" id="gridRadios3" value="option3"
                disabled>
            <label class="form-check-label" for="gridRadios3">
                Mains
            </label>
        </div>
        <div class="form-check">
            <input class="form-check-input" type="checkbox"
                id="gridCheck2">
            <label class="form-check-label" for="gridCheck2">
                Certified
            </label>
        </div>
    </div>
</div>
<button type="submit" class="ti-btn ti-btn-primary-full">Sign in</button>
</form>
`
export let layoutsTS5 =
`   <form class="sm:grid grid-cols-4 gap-4 items-center">
<div class="mb-4 sm:mb-0 input-group">
    <div class="input-group-text">&#64;</div>
    <input type="text" class="form-control"
        id="inlineFormInputGroupUsername" placeholder="Username">
</div>
<select class="mb-4 sm:mb-0 form-select !py-3" id="inlineFormSelectPref">
    <option selected>Choose...</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
</select>
<div class=" form-check !my-auto">
    <input class="form-check-input" type="checkbox"
        id="inlineFormCheck">
    <label class="form-check-label" for="inlineFormCheck">
        Remember me
    </label>
</div>
<button type="submit" class="ti-btn ti-btn-primary-full !mb-0 mt-4">Submit</button>
</form>`
export let layoutsTS6 =
` <div class="grid grid-cols-12 gap-4">
<div class="sm:col-span-7 col-span-12">
    <input type="text" class="form-control" placeholder="City"
        aria-label="City">
</div>
<div class="sm:col-span-3 col-span-12">
    <input type="text" class="form-control" placeholder="State"
        aria-label="State">
</div>
<div class="sm:col-span-2 col-span-12">
    <input type="text" class="form-control" placeholder="Zip"
        aria-label="Zip">
</div>
</div>`
export let layoutsTS7 =
`   <div class="box-body">
<div class="mb-4">
    <label for="formGroupExampleInput" class="form-label">Example label</label>
    <input type="text" class="form-control" id="formGroupExampleInput"
        placeholder="Example input placeholder">
</div>
<div class="mb-1">
    <label for="formGroupExampleInput2" class="form-label">Another label</label>
    <input type="text" class="form-control" id="formGroupExampleInput2"
        placeholder="Another input placeholder">
</div>
</div>`
export let layoutsTS8 =
`  <div class="box-body">
<div class="grid grid-cols-12 mb-4">
    <label for="colFormLabelSm"
        class="sm:col-span-2 col-span-12 col-form-label col-form-label-sm">Email</label>
    <div class="sm:col-span-10 col-span-12">
        <input type="email" class="form-control form-control-sm"
            id="colFormLabelSm" placeholder="col-form-label-sm">
    </div>
</div>
<div class="grid grid-cols-12 mb-4">
    <label for="colFormLabel" class="sm:col-span-2 col-span-12 col-form-label">Email</label>
    <div class="sm:col-span-10 col-span-12">
        <input type="email" class="form-control" id="colFormLabel"
            placeholder="col-form-label">
    </div>
</div>
<div class="grid grid-cols-12">
    <label for="colFormLabelLg"
        class="sm:col-span-2 col-span-12 col-form-label col-form-label-lg text-[1.25rem]">Email</label>
    <div class="sm:col-span-10 col-span-12">
        <input type="email" class="form-control form-control-lg"
            id="colFormLabelLg" placeholder="col-form-label-lg">
    </div>
</div>
</div>`
export let layoutsTS9 =
`   <div class="box-body">
<form class="sm:grid grid-cols-12 block gap-y-2 gap-x-4 items-center mb-4">
    <div class="col-span-12 mb-4 sm:mb-0">
        <label class="hidden" for="autoSizingInput">Name</label>
        <input type="text" class="form-control" id="autoSizingInput"
            placeholder="Jane Doe">
    </div>
    <div class="col-span-12 mb-4 sm:mb-0">
        <label class="hidden"
            for="autoSizingInputGroup">Username</label>
        <div class="input-group">
            <div class="input-group-text">&#64;</div>
            <input type="text" class="form-control"
                id="autoSizingInputGroup" placeholder="Username">
        </div>
    </div>
    <div class="col-span-12 mb-4 sm:mb-0">
        <label class="hidden"
            for="autoSizingSelect">Preference</label>
        <select class="form-select" id="autoSizingSelect">
            <option selected>Choose...</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
        </select>
    </div>
    <div class="col-span-12">
        <div class="form-check">
            <input class="form-check-input" type="checkbox"
                id="autoSizingCheck">
            <label class="form-check-label" for="autoSizingCheck">
                Remember me
            </label>
        </div>
    </div>
    <div class="col-span-12">
        <button type="submit" class="ti-btn ti-btn-primary-full !mb-0 mt-4">Submit</button>
    </div>
</form>
<span class="font-semibold text-[#8c9097] dark:text-white/50">You can then remix that once again with size-specific column
    classes.</span>
<form class="grid grid-cols-12  gap-x-4 gap-y-2 items-center mt-2">
    <div class="sm:col-span-3 col-span-12">
        <label class="hidden"
            for="specificSizeInputName">Name</label>
        <input type="text" class="form-control" id="specificSizeInputName"
            placeholder="Jane Doe">
    </div>
    <div class="sm:col-span-3 col-span-12">
        <label class="hidden"
            for="specificSizeInputGroupUsername">Username</label>
        <div class="input-group">
            <div class="input-group-text">&#64;</div>
            <input type="text" class="form-control"
                id="specificSizeInputGroupUsername" placeholder="Username">
        </div>
    </div>
    <div class="sm:col-span-3 col-span-12">
        <label class="hidden"
            for="specificSizeSelect">Preference</label>
        <select class="form-select !py-[0.59rem]" id="specificSizeSelect">
            <option selected>Choose...</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
        </select>
    </div>
    <div class="sm:col-span-3 col-span-12">
        <div class="form-check !my-auto">
            <input class="form-check-input" type="checkbox"
                id="autoSizingCheck2">
            <label class="form-check-label" for="autoSizingCheck2">
                Remember me
            </label>
        </div>
    </div>
    <div class="sm:col-span-3 col-span-12">
        <button type="submit" class="ti-btn ti-btn-primary-full">Submit</button>
    </div>
</form>
</div>`
export let layoutsTS10 =
`   <div class="box-body">
<div class="grid grid-cols-12 sm:gap-x-6 sm:gap-y-4">
    <div class="md:col-span-6 col-span-12 mb-4">
        <label class="form-label">First Name</label>
        <input type="text" class="form-control" placeholder="First name"
            aria-label="First name">
    </div>
    <div class="md:col-span-6 col-span-12 mb-4">
        <label class="form-label">Last Name</label>
        <input type="text" class="form-control" placeholder="Last name"
            aria-label="Last name">
    </div>
    <div class="md:col-span-6 col-span-12 mb-4 sm:mb-0">
        <label class="form-label">Address</label>
        <div class="grid grid-cols-12 sm:gap-x-4">
            <div class="xl:col-span-12 col-span-12 mb-4">
                <input type="text" class="form-control" placeholder="Street"
                aria-label="Street">
            </div>
            <div class="xl:col-span-12 col-span-12 mb-4">
                <input type="text" class="form-control" placeholder="Landmark"
                aria-label="Landmark">
            </div>
            <div class="xxl:col-span-6 xl:col-span-12 col-span-12 mb-4">
                <input type="text" class="form-control" placeholder="City"
                aria-label="City">
            </div>
            <div class="xxl:col-span-6 xl:col-span-12 col-span-12 mb-4">
                <select id="inputState1" class="form-select !py-[0.59rem]">
                    <option selected>State</option>
                    <option>...</option>
                </select>
            </div>
            <div class="xxl:col-span-6 xl:col-span-12 col-span-12 xxl:mb-0 mb-4">
                <input type="text" class="form-control" placeholder="Postal/Zip code"
                aria-label="Postal/Zip code">
            </div>
            <div class="xxl:col-span-6 xl:col-span-12 col-span-12">
                <select id="inputCountry" class="form-select !py-[0.59rem]">
                    <option selected>Country</option>
                    <option>...</option>
                </select>
            </div>
        </div>
    </div>
    <div class="md:col-span-6  col-span-12">
        <div class="grid grid-cols-12">
            <div class="xl:col-span-12 col-span-12 mb-4">
                <label class="form-label">Email</label>
                <input type="email" class="form-control" placeholder="Email"
                aria-label="email">
            </div>
            <div class="xl:col-span-12 col-span-12 mb-4">
                <label class="form-label">D.O.B</label>
                <input type="date" class="form-control"
                aria-label="dateofbirth">
            </div>
            <div class="xl:col-span-12 col-span-12 mb-4">
                <div class="grid grid-cols-12 gap-3">
                    <label class="form-label mb-1 xl:col-span-12 col-span-12">Maritial Status</label>
                    <div class="xl:col-span-6 col-span-12">
                        <div class="form-check">
                            <input class="form-check-input" type="radio" value="" id="status-married" name="status-married">
                            <label class="form-check-label" for="status-married">
                                Married
                            </label>
                        </div>
                    </div>
                    <div class="xl:col-span-6 col-span-12">
                        <div class="form-check">
                            <input class="form-check-input" type="radio" value="" id="status-unmarried" name="status-married" checked>
                            <label class="form-check-label" for="status-unmarried">
                                Single
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            <div class="xl:col-span-12 col-span-12">

            </div>
        </div>
    </div>
    <div class="md:col-span-6 col-span-12 mb-4 sm:mb-0">
        <label class="form-label">Contact Number</label>
        <input type="number" class="form-control" placeholder="Phone number"
            aria-label="Phone number">
    </div>
    <div class="md:col-span-6 col-span-12 mb-4 sm:mb-0">
        <label class="form-label">Alternative Contact</label>
        <input type="number" class="form-control" placeholder="Phone number"
            aria-label="Phone number">
    </div>
    <div class="md:col-span-12 col-span-12 mb-4 sm:mb-0">
        <div class="form-check mb-4">
            <input class="form-check-input" type="checkbox" id="gridCheck">
            <label class="form-check-label" for="gridCheck">
                Check me out
            </label>
        </div>
    </div>
    <div class="md:col-span-12 col-span-12">
        <button type="submit" class="ti-btn ti-btn-primary-full !mb-0">Sign in</button>
    </div>
</div>
</div>`
export let layoutsTS11 =
` <form class="grid grid-cols-12 gap-4 mt-0">
<div class="md:col-span-6 col-span-12">
    <label class="form-label">First Name</label>
    <input type="text" class="form-control" placeholder="First name"
        aria-label="First name">
</div>
<div class="md:col-span-6 col-span-12">
    <label class="form-label">Last Name</label>
    <input type="text" class="form-control" placeholder="Last name"
        aria-label="Last name">
</div>
<div class="md:col-span-6 col-span-12">
    <label for="inputEmail4" class="form-label">Email</label>
    <input type="email" class="form-control" id="inputEmail4">
</div>
<div class="md:col-span-6 col-span-12">
    <label for="inputPassword4" class="form-label">Password</label>
    <input type="password" class="form-control" id="inputPassword4">
</div>
<div class="col-span-12">
    <label for="inputAddress" class="form-label">Address</label>
    <input type="text" class="form-control" id="inputAddress"
        placeholder="1234 Main St">
</div>
<div class="col-span-12">
    <label for="inputAddress2" class="form-label">Address 2</label>
    <input type="text" class="form-control" id="inputAddress2"
        placeholder="Apartment, studio, or floor">
</div>
<div class="md:col-span-6 col-span-12">
    <label for="inputCity" class="form-label">City</label>
    <input type="text" class="form-control" id="inputCity">
</div>
<div class="md:col-span-4 col-span-12">
    <label for="inputState" class="form-label">State</label>
    <select id="inputState" class="form-select !py-[0.59rem]">
        <option selected>Choose...</option>
        <option>...</option>
    </select>
</div>
<div class="md:col-span-2 col-span-12">
    <label for="inputZip" class="form-label">Zip</label>
    <input type="text" class="form-control" id="inputZip">
</div>
<div class="col-span-12 ">
    <div class="form-check">
        <input class="form-check-input" type="checkbox" id="gridCheck3">
        <label class="form-check-label" for="gridCheck3">
            Check me out
        </label>
    </div>
</div>
<div class="col-span-12">
    <button type="submit" class="ti-btn ti-btn-primary-full">Sign in</button>
</div>
</form>`