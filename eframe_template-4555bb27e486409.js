let T=`boolean`,P=1,W=16,Y=205,K=`undefined`,L=`utf-8`,X=4,V=`Object`,N=0,J=null,S=`number`,U=`string`,Q=`function`,H=Array,M=Error,R=Int32Array,O=Uint8Array,I=undefined;var k=(a=>{if(d===b.length)b.push(b.length+ P);const c=d;d=b[c];b[c]=a;return c});var j=((a,b)=>{a=a>>>N;return g.decode(i().subarray(a,a+ b))});var t=(()=>{if(s===J||s.byteLength===N){s=new Float64Array(a.memory.buffer)};return s});function A(b,c){try{return b.apply(this,c)}catch(b){a.__wbindgen_exn_store(k(b))}}var E=((b,c)=>{a=b.exports;G.__wbindgen_wasm_module=c;s=J;q=J;h=J;a.__wbindgen_start();return a});var c=(a=>b[a]);var C=(()=>{const b={};b.wbg={};b.wbg.__wbindgen_object_drop_ref=(a=>{f(a)});b.wbg.__wbindgen_cb_drop=(a=>{const b=f(a).original;if(b.cnt--==P){b.a=N;return !0};const c=!1;return c});b.wbg.__wbindgen_string_new=((a,b)=>{const c=j(a,b);return k(c)});b.wbg.__wbindgen_string_get=((b,d)=>{const e=c(d);const f=typeof e===U?e:I;var g=p(f)?N:o(f,a.__wbindgen_malloc,a.__wbindgen_realloc);var h=l;r()[b/X+ P]=h;r()[b/X+ N]=g});b.wbg.__wbindgen_object_clone_ref=(a=>{const b=c(a);return k(b)});b.wbg.__wbg_error_aa2dbed0c2494c68=((b,c)=>{let d;let e;try{d=b;e=c;console.error(j(b,c))}finally{a.__wbindgen_free(d,e,P)}});b.wbg.__wbg_new_518b166234aaa8d8=(()=>{const a=new M();return k(a)});b.wbg.__wbg_stack_2f0a8dbd9ea589a3=((b,d)=>{const e=c(d).stack;const f=o(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=l;r()[b/X+ P]=g;r()[b/X+ N]=f});b.wbg.__wbg_warn_2a41ad05e8f4c248=((a,b)=>{console.warn(j(a,b))});b.wbg.__wbg_info_6447e242c556f7b7=((a,b)=>{console.info(j(a,b))});b.wbg.__wbg_debug_3093471b179fe3b4=((a,b)=>{console.debug(j(a,b))});b.wbg.__wbg_trace_935fa27bf99e3635=((a,b)=>{console.trace(j(a,b))});b.wbg.__wbindgen_number_get=((a,b)=>{const d=c(b);const e=typeof d===S?d:I;t()[a/8+ P]=p(e)?N:e;r()[a/X+ N]=!p(e)});b.wbg.__wbg_queueMicrotask_4d890031a6a5a50c=(a=>{queueMicrotask(c(a))});b.wbg.__wbg_queueMicrotask_adae4bc085237231=(a=>{const b=c(a).queueMicrotask;return k(b)});b.wbg.__wbindgen_is_function=(a=>{const b=typeof c(a)===Q;return b});b.wbg.__wbg_performance_eeefc685c9bc38b4=(a=>{const b=c(a).performance;return k(b)});b.wbg.__wbindgen_is_undefined=(a=>{const b=c(a)===I;return b});b.wbg.__wbg_now_e0d8ec93dd25766a=(a=>{const b=c(a).now();return b});b.wbg.__wbindgen_boolean_get=(a=>{const b=c(a);const d=typeof b===T?(b?P:N):2;return d});b.wbg.__wbg_instanceof_WebGl2RenderingContext_2a0a9b7be3acc66a=(a=>{let b;try{b=c(a) instanceof WebGL2RenderingContext}catch(a){b=!1}const d=b;return d});b.wbg.__wbg_bindVertexArray_7b37e9d04dfd27d9=((a,b)=>{c(a).bindVertexArray(c(b))});b.wbg.__wbg_bufferData_a05a44a5492e757f=((a,b,d,e)=>{c(a).bufferData(b>>>N,c(d),e>>>N)});b.wbg.__wbg_createVertexArray_7466a685c3b93a65=(a=>{const b=c(a).createVertexArray();return p(b)?N:k(b)});b.wbg.__wbg_texImage2D_7900fb999e467869=function(){return A(((a,b,d,e,f,g,h,i,j,k)=>{c(a).texImage2D(b>>>N,d,e,f,g,h,i>>>N,j>>>N,c(k))}),arguments)};b.wbg.__wbg_texSubImage2D_be9f61a79f57b819=function(){return A(((a,b,d,e,f,g,h,i,j,k)=>{c(a).texSubImage2D(b>>>N,d,e,f,g,h,i>>>N,j>>>N,c(k))}),arguments)};b.wbg.__wbg_texSubImage2D_8694c2fdf6ffae77=function(){return A(((a,b,d,e,f,g,h,i,j,k)=>{c(a).texSubImage2D(b>>>N,d,e,f,g,h,i>>>N,j>>>N,k)}),arguments)};b.wbg.__wbg_activeTexture_713ce7d3e753740f=((a,b)=>{c(a).activeTexture(b>>>N)});b.wbg.__wbg_attachShader_184a61d345c20d42=((a,b,d)=>{c(a).attachShader(c(b),c(d))});b.wbg.__wbg_bindBuffer_a0055fe364603e72=((a,b,d)=>{c(a).bindBuffer(b>>>N,c(d))});b.wbg.__wbg_bindTexture_ba764bb08be120f7=((a,b,d)=>{c(a).bindTexture(b>>>N,c(d))});b.wbg.__wbg_blendEquationSeparate_821c15a65234ac9e=((a,b,d)=>{c(a).blendEquationSeparate(b>>>N,d>>>N)});b.wbg.__wbg_blendFuncSeparate_285a70ec8276ccab=((a,b,d,e,f)=>{c(a).blendFuncSeparate(b>>>N,d>>>N,e>>>N,f>>>N)});b.wbg.__wbg_clear_1621e0405dedb722=((a,b)=>{c(a).clear(b>>>N)});b.wbg.__wbg_clearColor_0b26e6b243b514b3=((a,b,d,e,f)=>{c(a).clearColor(b,d,e,f)});b.wbg.__wbg_colorMask_048d9f7d86363300=((a,b,d,e,f)=>{c(a).colorMask(b!==N,d!==N,e!==N,f!==N)});b.wbg.__wbg_compileShader_710b082356f5014b=((a,b)=>{c(a).compileShader(c(b))});b.wbg.__wbg_createBuffer_210de590ff501232=(a=>{const b=c(a).createBuffer();return p(b)?N:k(b)});b.wbg.__wbg_createProgram_36349c11c5d787f1=(a=>{const b=c(a).createProgram();return p(b)?N:k(b)});b.wbg.__wbg_createShader_a56f470ffa1c92a5=((a,b)=>{const d=c(a).createShader(b>>>N);return p(d)?N:k(d)});b.wbg.__wbg_createTexture_0a5d95233724c9fb=(a=>{const b=c(a).createTexture();return p(b)?N:k(b)});b.wbg.__wbg_deleteBuffer_3129e4f30c465a14=((a,b)=>{c(a).deleteBuffer(c(b))});b.wbg.__wbg_deleteProgram_100d1c04b7f0f6ee=((a,b)=>{c(a).deleteProgram(c(b))});b.wbg.__wbg_deleteShader_40389978f329df9f=((a,b)=>{c(a).deleteShader(c(b))});b.wbg.__wbg_deleteTexture_ad998c535ddaaf67=((a,b)=>{c(a).deleteTexture(c(b))});b.wbg.__wbg_detachShader_297dda80dd5f185f=((a,b,d)=>{c(a).detachShader(c(b),c(d))});b.wbg.__wbg_disable_483aff0769a6f791=((a,b)=>{c(a).disable(b>>>N)});b.wbg.__wbg_disableVertexAttribArray_0c9e77abfba9ee15=((a,b)=>{c(a).disableVertexAttribArray(b>>>N)});b.wbg.__wbg_drawElements_b5d8be50bbd1221c=((a,b,d,e,f)=>{c(a).drawElements(b>>>N,d,e>>>N,f)});b.wbg.__wbg_enable_c5caba1636ec3c96=((a,b)=>{c(a).enable(b>>>N)});b.wbg.__wbg_enableVertexAttribArray_0424d3842911d8b6=((a,b)=>{c(a).enableVertexAttribArray(b>>>N)});b.wbg.__wbg_getAttribLocation_7d1c430e776fec76=((a,b,d,e)=>{const f=c(a).getAttribLocation(c(b),j(d,e));return f});b.wbg.__wbg_getError_2a7bd3d31e0d4a22=(a=>{const b=c(a).getError();return b});b.wbg.__wbg_getExtension_b32d1f4b44a2464b=function(){return A(((a,b,d)=>{const e=c(a).getExtension(j(b,d));return p(e)?N:k(e)}),arguments)};b.wbg.__wbg_getParameter_92e1c06daec0a5db=function(){return A(((a,b)=>{const d=c(a).getParameter(b>>>N);return k(d)}),arguments)};b.wbg.__wbg_getProgramInfoLog_5caeb981d27a790c=((b,d,e)=>{const f=c(d).getProgramInfoLog(c(e));var g=p(f)?N:o(f,a.__wbindgen_malloc,a.__wbindgen_realloc);var h=l;r()[b/X+ P]=h;r()[b/X+ N]=g});b.wbg.__wbg_getProgramParameter_69a29687a127f713=((a,b,d)=>{const e=c(a).getProgramParameter(c(b),d>>>N);return k(e)});b.wbg.__wbg_getShaderInfoLog_e78ccbd4507b9d0c=((b,d,e)=>{const f=c(d).getShaderInfoLog(c(e));var g=p(f)?N:o(f,a.__wbindgen_malloc,a.__wbindgen_realloc);var h=l;r()[b/X+ P]=h;r()[b/X+ N]=g});b.wbg.__wbg_getShaderParameter_033044aa2910ba65=((a,b,d)=>{const e=c(a).getShaderParameter(c(b),d>>>N);return k(e)});b.wbg.__wbg_getSupportedExtensions_24ca3063e6cb52dc=(a=>{const b=c(a).getSupportedExtensions();return p(b)?N:k(b)});b.wbg.__wbg_getUniformLocation_50b6838495678a49=((a,b,d,e)=>{const f=c(a).getUniformLocation(c(b),j(d,e));return p(f)?N:k(f)});b.wbg.__wbg_linkProgram_79a9e7719a86a93e=((a,b)=>{c(a).linkProgram(c(b))});b.wbg.__wbg_pixelStorei_b4b6c5d89e9b5f96=((a,b,d)=>{c(a).pixelStorei(b>>>N,d)});b.wbg.__wbg_scissor_c1bf95c48721deac=((a,b,d,e,f)=>{c(a).scissor(b,d,e,f)});b.wbg.__wbg_shaderSource_f58b7f19ccf7f292=((a,b,d,e)=>{c(a).shaderSource(c(b),j(d,e))});b.wbg.__wbg_texParameteri_31d32c2b86548f8e=((a,b,d,e)=>{c(a).texParameteri(b>>>N,d>>>N,e)});b.wbg.__wbg_uniform1i_a949331c579124f5=((a,b,d)=>{c(a).uniform1i(c(b),d)});b.wbg.__wbg_uniform2f_3ecad549d55491f1=((a,b,d,e)=>{c(a).uniform2f(c(b),d,e)});b.wbg.__wbg_useProgram_45855699f032d49a=((a,b)=>{c(a).useProgram(c(b))});b.wbg.__wbg_vertexAttribPointer_7be57c972fbee1d0=((a,b,d,e,f,g,h)=>{c(a).vertexAttribPointer(b>>>N,d,e>>>N,f!==N,g,h)});b.wbg.__wbg_viewport_146f8499414eebc9=((a,b,d,e,f)=>{c(a).viewport(b,d,e,f)});b.wbg.__wbg_instanceof_Window_3e5cd1f48c152d01=(a=>{let b;try{b=c(a) instanceof Window}catch(a){b=!1}const d=b;return d});b.wbg.__wbg_document_d609202d16c38224=(a=>{const b=c(a).document;return p(b)?N:k(b)});b.wbg.__wbg_location_176c34e89c2c9d80=(a=>{const b=c(a).location;return k(b)});b.wbg.__wbg_navigator_96ba491902f8f083=(a=>{const b=c(a).navigator;return k(b)});b.wbg.__wbg_innerHeight_5e414ce6ae3fd139=function(){return A((a=>{const b=c(a).innerHeight;return k(b)}),arguments)};b.wbg.__wbg_devicePixelRatio_964a528c661f5575=(a=>{const b=c(a).devicePixelRatio;return b});b.wbg.__wbg_localStorage_8c507fd281456944=function(){return A((a=>{const b=c(a).localStorage;return p(b)?N:k(b)}),arguments)};b.wbg.__wbg_performance_43f012c27bf6b283=(a=>{const b=c(a).performance;return p(b)?N:k(b)});b.wbg.__wbg_matchMedia_7fbd33cb577fe4ad=function(){return A(((a,b,d)=>{const e=c(a).matchMedia(j(b,d));return p(e)?N:k(e)}),arguments)};b.wbg.__wbg_open_1526872b77d837c5=function(){return A(((a,b,d,e,f)=>{const g=c(a).open(j(b,d),j(e,f));return p(g)?N:k(g)}),arguments)};b.wbg.__wbg_cancelAnimationFrame_cb9c6f65eaa83d76=function(){return A(((a,b)=>{c(a).cancelAnimationFrame(b)}),arguments)};b.wbg.__wbg_requestAnimationFrame_74309aadebde12fa=function(){return A(((a,b)=>{const d=c(a).requestAnimationFrame(c(b));return d}),arguments)};b.wbg.__wbg_clearInterval_d246e34afa42bd5b=((a,b)=>{c(a).clearInterval(b)});b.wbg.__wbg_setTimeout_06458eba2b40711c=function(){return A(((a,b,d)=>{const e=c(a).setTimeout(c(b),d);return e}),arguments)};b.wbg.__wbg_body_64abc9aba1891e91=(a=>{const b=c(a).body;return p(b)?N:k(b)});b.wbg.__wbg_createElement_fdd5c113cb84539e=function(){return A(((a,b,d)=>{const e=c(a).createElement(j(b,d));return k(e)}),arguments)};b.wbg.__wbg_getElementById_65b9547a428b5eb4=((a,b,d)=>{const e=c(a).getElementById(j(b,d));return p(e)?N:k(e)});b.wbg.__wbg_setid_26cf25dc305dcc43=((a,b,d)=>{c(a).id=j(b,d)});b.wbg.__wbg_scrollLeft_4ecf6ec16fd5dbf8=(a=>{const b=c(a).scrollLeft;return b});b.wbg.__wbg_clientWidth_eca2065ae6dd9dcd=(a=>{const b=c(a).clientWidth;return b});b.wbg.__wbg_clientHeight_530993c2aa871aaf=(a=>{const b=c(a).clientHeight;return b});b.wbg.__wbg_getBoundingClientRect_4167ccfa40cf88fc=(a=>{const b=c(a).getBoundingClientRect();return k(b)});b.wbg.__wbg_scrollTop_a96e7e0ba1916978=(a=>{const b=c(a).scrollTop;return b});b.wbg.__wbg_hidden_f1bf0d1466fc7298=(a=>{const b=c(a).hidden;return b});b.wbg.__wbg_sethidden_1c32a8f6514b56aa=((a,b)=>{c(a).hidden=b!==N});b.wbg.__wbg_style_97c680a5cbdf49cd=(a=>{const b=c(a).style;return k(b)});b.wbg.__wbg_offsetTop_c09c80578fe1b728=(a=>{const b=c(a).offsetTop;return b});b.wbg.__wbg_offsetLeft_0a88504157e0950b=(a=>{const b=c(a).offsetLeft;return b});b.wbg.__wbg_offsetWidth_b1977ba06d409033=(a=>{const b=c(a).offsetWidth;return b});b.wbg.__wbg_blur_0f6854a1635dce70=function(){return A((a=>{c(a).blur()}),arguments)};b.wbg.__wbg_focus_6d3d2b6776d06f7f=function(){return A((a=>{c(a).focus()}),arguments)};b.wbg.__wbg_instanceof_WebGlRenderingContext_275e63499db8b412=(a=>{let b;try{b=c(a) instanceof WebGLRenderingContext}catch(a){b=!1}const d=b;return d});b.wbg.__wbg_bufferData_11f5ff31cb447750=((a,b,d,e)=>{c(a).bufferData(b>>>N,c(d),e>>>N)});b.wbg.__wbg_texImage2D_50acf334022f586d=function(){return A(((a,b,d,e,f,g,h,i,j,k)=>{c(a).texImage2D(b>>>N,d,e,f,g,h,i>>>N,j>>>N,c(k))}),arguments)};b.wbg.__wbg_texSubImage2D_1b4def2ea95bfb31=function(){return A(((a,b,d,e,f,g,h,i,j,k)=>{c(a).texSubImage2D(b>>>N,d,e,f,g,h,i>>>N,j>>>N,c(k))}),arguments)};b.wbg.__wbg_activeTexture_123afbbc8970fe31=((a,b)=>{c(a).activeTexture(b>>>N)});b.wbg.__wbg_attachShader_289e2f1d24149257=((a,b,d)=>{c(a).attachShader(c(b),c(d))});b.wbg.__wbg_bindBuffer_c71ed62c7c21bed0=((a,b,d)=>{c(a).bindBuffer(b>>>N,c(d))});b.wbg.__wbg_bindTexture_df13ba7e7ee5d984=((a,b,d)=>{c(a).bindTexture(b>>>N,c(d))});b.wbg.__wbg_blendEquationSeparate_68fd537772dc05eb=((a,b,d)=>{c(a).blendEquationSeparate(b>>>N,d>>>N)});b.wbg.__wbg_blendFuncSeparate_c3c9b0213697920c=((a,b,d,e,f)=>{c(a).blendFuncSeparate(b>>>N,d>>>N,e>>>N,f>>>N)});b.wbg.__wbg_clear_5e252567fe8f1763=((a,b)=>{c(a).clear(b>>>N)});b.wbg.__wbg_clearColor_253d33d2ea420d1a=((a,b,d,e,f)=>{c(a).clearColor(b,d,e,f)});b.wbg.__wbg_colorMask_ee95cb90b5399c1d=((a,b,d,e,f)=>{c(a).colorMask(b!==N,d!==N,e!==N,f!==N)});b.wbg.__wbg_compileShader_df38c9b4d109df2c=((a,b)=>{c(a).compileShader(c(b))});b.wbg.__wbg_createBuffer_993ecd2e92aabe3c=(a=>{const b=c(a).createBuffer();return p(b)?N:k(b)});b.wbg.__wbg_createProgram_76ddcf5596a96a1a=(a=>{const b=c(a).createProgram();return p(b)?N:k(b)});b.wbg.__wbg_createShader_25391a4dceb30291=((a,b)=>{const d=c(a).createShader(b>>>N);return p(d)?N:k(d)});b.wbg.__wbg_createTexture_fc71efc6d11fdbcb=(a=>{const b=c(a).createTexture();return p(b)?N:k(b)});b.wbg.__wbg_deleteBuffer_f4994a64cdd473a3=((a,b)=>{c(a).deleteBuffer(c(b))});b.wbg.__wbg_deleteProgram_ffe51c2159e56aeb=((a,b)=>{c(a).deleteProgram(c(b))});b.wbg.__wbg_deleteShader_c10a3e2a689f8115=((a,b)=>{c(a).deleteShader(c(b))});b.wbg.__wbg_deleteTexture_b8458a96b71a0a04=((a,b)=>{c(a).deleteTexture(c(b))});b.wbg.__wbg_detachShader_bef8220f8d13b6f7=((a,b,d)=>{c(a).detachShader(c(b),c(d))});b.wbg.__wbg_disable_8938e1da156fa7d9=((a,b)=>{c(a).disable(b>>>N)});b.wbg.__wbg_disableVertexAttribArray_b196e82af1f9e794=((a,b)=>{c(a).disableVertexAttribArray(b>>>N)});b.wbg.__wbg_drawElements_44afd9c142d1e01f=((a,b,d,e,f)=>{c(a).drawElements(b>>>N,d,e>>>N,f)});b.wbg.__wbg_enable_e39f53a946b9e3a0=((a,b)=>{c(a).enable(b>>>N)});b.wbg.__wbg_enableVertexAttribArray_f8678d164c294659=((a,b)=>{c(a).enableVertexAttribArray(b>>>N)});b.wbg.__wbg_getAttribLocation_b08751ecb11d328d=((a,b,d,e)=>{const f=c(a).getAttribLocation(c(b),j(d,e));return f});b.wbg.__wbg_getError_33ddd6622c984b78=(a=>{const b=c(a).getError();return b});b.wbg.__wbg_getExtension_f109da65b46fbeb8=function(){return A(((a,b,d)=>{const e=c(a).getExtension(j(b,d));return p(e)?N:k(e)}),arguments)};b.wbg.__wbg_getParameter_fedfba9017d5fbcd=function(){return A(((a,b)=>{const d=c(a).getParameter(b>>>N);return k(d)}),arguments)};b.wbg.__wbg_getProgramInfoLog_99334d62bea10332=((b,d,e)=>{const f=c(d).getProgramInfoLog(c(e));var g=p(f)?N:o(f,a.__wbindgen_malloc,a.__wbindgen_realloc);var h=l;r()[b/X+ P]=h;r()[b/X+ N]=g});b.wbg.__wbg_getProgramParameter_ac16a850d3f251f3=((a,b,d)=>{const e=c(a).getProgramParameter(c(b),d>>>N);return k(e)});b.wbg.__wbg_getShaderInfoLog_207d91c9201acffa=((b,d,e)=>{const f=c(d).getShaderInfoLog(c(e));var g=p(f)?N:o(f,a.__wbindgen_malloc,a.__wbindgen_realloc);var h=l;r()[b/X+ P]=h;r()[b/X+ N]=g});b.wbg.__wbg_getShaderParameter_d5af258ca8110f13=((a,b,d)=>{const e=c(a).getShaderParameter(c(b),d>>>N);return k(e)});b.wbg.__wbg_getSupportedExtensions_4b8ded535a18e392=(a=>{const b=c(a).getSupportedExtensions();return p(b)?N:k(b)});b.wbg.__wbg_getUniformLocation_29cc1018d110f9f0=((a,b,d,e)=>{const f=c(a).getUniformLocation(c(b),j(d,e));return p(f)?N:k(f)});b.wbg.__wbg_linkProgram_1ab5d0990c565f87=((a,b)=>{c(a).linkProgram(c(b))});b.wbg.__wbg_pixelStorei_48bb580e625ac760=((a,b,d)=>{c(a).pixelStorei(b>>>N,d)});b.wbg.__wbg_scissor_6691dacd4ecb8e80=((a,b,d,e,f)=>{c(a).scissor(b,d,e,f)});b.wbg.__wbg_shaderSource_8581035b723a56a7=((a,b,d,e)=>{c(a).shaderSource(c(b),j(d,e))});b.wbg.__wbg_texParameteri_fba016345d388fd9=((a,b,d,e)=>{c(a).texParameteri(b>>>N,d>>>N,e)});b.wbg.__wbg_uniform1i_59bbe75ef84036ac=((a,b,d)=>{c(a).uniform1i(c(b),d)});b.wbg.__wbg_uniform2f_07d7d700bb962bb6=((a,b,d,e)=>{c(a).uniform2f(c(b),d,e)});b.wbg.__wbg_useProgram_667ebfb0fb0de4c0=((a,b)=>{c(a).useProgram(c(b))});b.wbg.__wbg_vertexAttribPointer_1241d48b9272fc9d=((a,b,d,e,f,g,h)=>{c(a).vertexAttribPointer(b>>>N,d,e>>>N,f!==N,g,h)});b.wbg.__wbg_viewport_2464c396536924a3=((a,b,d,e,f)=>{c(a).viewport(b,d,e,f)});b.wbg.__wbg_instanceof_HtmlInputElement_e7869aaef9cbb0e6=(a=>{let b;try{b=c(a) instanceof HTMLInputElement}catch(a){b=!1}const d=b;return d});b.wbg.__wbg_setautofocus_e3adf449a14d2913=((a,b)=>{c(a).autofocus=b!==N});b.wbg.__wbg_setsize_566de3ada2f67c28=((a,b)=>{c(a).size=b>>>N});b.wbg.__wbg_value_e024243a9dae20bc=((b,d)=>{const e=c(d).value;const f=o(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=l;r()[b/X+ P]=g;r()[b/X+ N]=f});b.wbg.__wbg_setvalue_5b3442ff620b4a5d=((a,b,d)=>{c(a).value=j(b,d)});b.wbg.__wbg_href_160af2ae1328d7b7=function(){return A(((b,d)=>{const e=c(d).href;const f=o(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=l;r()[b/X+ P]=g;r()[b/X+ N]=f}),arguments)};b.wbg.__wbg_origin_595edc88be6e66b8=function(){return A(((b,d)=>{const e=c(d).origin;const f=o(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=l;r()[b/X+ P]=g;r()[b/X+ N]=f}),arguments)};b.wbg.__wbg_protocol_51a4e630fff75abb=function(){return A(((b,d)=>{const e=c(d).protocol;const f=o(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=l;r()[b/X+ P]=g;r()[b/X+ N]=f}),arguments)};b.wbg.__wbg_host_793ff88f2063bc10=function(){return A(((b,d)=>{const e=c(d).host;const f=o(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=l;r()[b/X+ P]=g;r()[b/X+ N]=f}),arguments)};b.wbg.__wbg_hostname_6a864c6261102cc7=function(){return A(((b,d)=>{const e=c(d).hostname;const f=o(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=l;r()[b/X+ P]=g;r()[b/X+ N]=f}),arguments)};b.wbg.__wbg_port_715b7b0dc92c5688=function(){return A(((b,d)=>{const e=c(d).port;const f=o(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=l;r()[b/X+ P]=g;r()[b/X+ N]=f}),arguments)};b.wbg.__wbg_search_9f7ca8896c2d0804=function(){return A(((b,d)=>{const e=c(d).search;const f=o(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=l;r()[b/X+ P]=g;r()[b/X+ N]=f}),arguments)};b.wbg.__wbg_hash_be2940ca236b5efc=function(){return A(((b,d)=>{const e=c(d).hash;const f=o(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=l;r()[b/X+ P]=g;r()[b/X+ N]=f}),arguments)};b.wbg.__wbg_getItem_5395a7e200c31e89=function(){return A(((b,d,e,f)=>{const g=c(d).getItem(j(e,f));var h=p(g)?N:o(g,a.__wbindgen_malloc,a.__wbindgen_realloc);var i=l;r()[b/X+ P]=i;r()[b/X+ N]=h}),arguments)};b.wbg.__wbg_setItem_3786c4c8dd0c9bd0=function(){return A(((a,b,d,e,f)=>{c(a).setItem(j(b,d),j(e,f))}),arguments)};b.wbg.__wbg_touches_87a0bcfa4c2fa447=(a=>{const b=c(a).touches;return k(b)});b.wbg.__wbg_changedTouches_1032f6aefa8e23a6=(a=>{const b=c(a).changedTouches;return k(b)});b.wbg.__wbg_name_bbf9c43b9611377a=((b,d)=>{const e=c(d).name;const f=o(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=l;r()[b/X+ P]=g;r()[b/X+ N]=f});b.wbg.__wbg_lastModified_435cb62cf983296f=(a=>{const b=c(a).lastModified;return b});b.wbg.__wbg_clipboard_45ab59b632e2c484=(a=>{const b=c(a).clipboard;return p(b)?N:k(b)});b.wbg.__wbg_userAgent_569b1cd728f0086d=function(){return A(((b,d)=>{const e=c(d).userAgent;const f=o(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=l;r()[b/X+ P]=g;r()[b/X+ N]=f}),arguments)};b.wbg.__wbg_writeText_ff00236e4aca4201=((a,b,d)=>{const e=c(a).writeText(j(b,d));return k(e)});b.wbg.__wbg_data_5d89389455680c67=((b,d)=>{const e=c(d).data;var f=p(e)?N:o(e,a.__wbindgen_malloc,a.__wbindgen_realloc);var g=l;r()[b/X+ P]=g;r()[b/X+ N]=f});b.wbg.__wbg_length_19f098aef166f1f1=(a=>{const b=c(a).length;return b});b.wbg.__wbg_get_9243b518e58464da=((a,b)=>{const d=c(a)[b>>>N];return p(d)?N:k(d)});b.wbg.__wbg_parentElement_72e144c2e8d9e0b5=(a=>{const b=c(a).parentElement;return p(b)?N:k(b)});b.wbg.__wbg_appendChild_d30e6b83791d04c0=function(){return A(((a,b)=>{const d=c(a).appendChild(c(b));return k(d)}),arguments)};b.wbg.__wbg_items_ebb6335fa98edc22=(a=>{const b=c(a).items;return k(b)});b.wbg.__wbg_files_3defd8db0f04ee46=(a=>{const b=c(a).files;return p(b)?N:k(b)});b.wbg.__wbg_getData_9bb88de49d7a730d=function(){return A(((b,d,e,f)=>{const g=c(d).getData(j(e,f));const h=o(g,a.__wbindgen_malloc,a.__wbindgen_realloc);const i=l;r()[b/X+ P]=i;r()[b/X+ N]=h}),arguments)};b.wbg.__wbg_addEventListener_9bf60ea8a362e5e4=function(){return A(((a,b,d,e)=>{c(a).addEventListener(j(b,d),c(e))}),arguments)};b.wbg.__wbg_removeEventListener_66ee1536a0b32c11=function(){return A(((a,b,d,e)=>{c(a).removeEventListener(j(b,d),c(e))}),arguments)};b.wbg.__wbg_keyCode_48fe24f81bbcf215=(a=>{const b=c(a).keyCode;return b});b.wbg.__wbg_altKey_bf16cace6fb79198=(a=>{const b=c(a).altKey;return b});b.wbg.__wbg_ctrlKey_977280484bcead08=(a=>{const b=c(a).ctrlKey;return b});b.wbg.__wbg_shiftKey_55894418ec38c771=(a=>{const b=c(a).shiftKey;return b});b.wbg.__wbg_metaKey_16606958d932a374=(a=>{const b=c(a).metaKey;return b});b.wbg.__wbg_isComposing_c7e418f80e641f3b=(a=>{const b=c(a).isComposing;return b});b.wbg.__wbg_key_cf8022c18f47869e=((b,d)=>{const e=c(d).key;const f=o(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=l;r()[b/X+ P]=g;r()[b/X+ N]=f});b.wbg.__wbg_length_9c0dd0075317fa21=(a=>{const b=c(a).length;return b});b.wbg.__wbg_item_828cbc1b99e68116=((a,b)=>{const d=c(a).item(b>>>N);return p(d)?N:k(d)});b.wbg.__wbg_get_7398eda896ed301e=((a,b)=>{const d=c(a)[b>>>N];return p(d)?N:k(d)});b.wbg.__wbg_dataTransfer_86945596a7c803c5=(a=>{const b=c(a).dataTransfer;return p(b)?N:k(b)});b.wbg.__wbg_width_1ccae8ab185a4192=(a=>{const b=c(a).width;return b});b.wbg.__wbg_height_415b4e67932f43c9=(a=>{const b=c(a).height;return b});b.wbg.__wbg_preventDefault_7f821f72e7c6b5d4=(a=>{c(a).preventDefault()});b.wbg.__wbg_stopPropagation_b7a931152e09c2ab=(a=>{c(a).stopPropagation()});b.wbg.__wbg_bindVertexArrayOES_d0c90ddc7c6360d2=((a,b)=>{c(a).bindVertexArrayOES(c(b))});b.wbg.__wbg_createVertexArrayOES_528c4cd10c985d11=(a=>{const b=c(a).createVertexArrayOES();return p(b)?N:k(b)});b.wbg.__wbg_identifier_8939f89f50c8fa6b=(a=>{const b=c(a).identifier;return b});b.wbg.__wbg_pageX_5b1c068609f43d64=(a=>{const b=c(a).pageX;return b});b.wbg.__wbg_pageY_b06b85e2cba2d3f7=(a=>{const b=c(a).pageY;return b});b.wbg.__wbg_force_c9599f2fa4a04bc2=(a=>{const b=c(a).force;return b});b.wbg.__wbg_size_5c0f6bdb97c23ee9=(a=>{const b=c(a).size;return b});b.wbg.__wbg_type_7c5cca016a153969=((b,d)=>{const e=c(d).type;const f=o(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=l;r()[b/X+ P]=g;r()[b/X+ N]=f});b.wbg.__wbg_arrayBuffer_a9d862b05aaee2f9=(a=>{const b=c(a).arrayBuffer();return k(b)});b.wbg.__wbg_type_97130f571e8d1d7c=((b,d)=>{const e=c(d).type;const f=o(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=l;r()[b/X+ P]=g;r()[b/X+ N]=f});b.wbg.__wbg_length_c8f895dad5ec94df=(a=>{const b=c(a).length;return b});b.wbg.__wbg_get_6756090dbec4b385=((a,b)=>{const d=c(a)[b>>>N];return p(d)?N:k(d)});b.wbg.__wbg_instanceof_HtmlCanvasElement_fba0ac991170cc00=(a=>{let b;try{b=c(a) instanceof HTMLCanvasElement}catch(a){b=!1}const d=b;return d});b.wbg.__wbg_width_cfc58d9656d60465=(a=>{const b=c(a).width;return b});b.wbg.__wbg_setwidth_7591ce24118fd14a=((a,b)=>{c(a).width=b>>>N});b.wbg.__wbg_height_1ba9072bd4001d19=(a=>{const b=c(a).height;return b});b.wbg.__wbg_setheight_f7ae862183d88bd5=((a,b)=>{c(a).height=b>>>N});b.wbg.__wbg_getContext_164dc98953ddbc68=function(){return A(((a,b,d)=>{const e=c(a).getContext(j(b,d));return p(e)?N:k(e)}),arguments)};b.wbg.__wbg_deltaX_03d8f6dcd2e14b63=(a=>{const b=c(a).deltaX;return b});b.wbg.__wbg_deltaY_7d9a7eb25f83e193=(a=>{const b=c(a).deltaY;return b});b.wbg.__wbg_deltaMode_5f43eb63f3077df7=(a=>{const b=c(a).deltaMode;return b});b.wbg.__wbg_clipboardData_e265cdf86dee361a=(a=>{const b=c(a).clipboardData;return p(b)?N:k(b)});b.wbg.__wbg_matches_4cc0ff05af669dc3=(a=>{const b=c(a).matches;return b});b.wbg.__wbg_clientX_1a01963cb1caa614=(a=>{const b=c(a).clientX;return b});b.wbg.__wbg_clientY_c370190d4150fba9=(a=>{const b=c(a).clientY;return b});b.wbg.__wbg_ctrlKey_643b17aaac67db50=(a=>{const b=c(a).ctrlKey;return b});b.wbg.__wbg_shiftKey_8fb7301f56e7e01c=(a=>{const b=c(a).shiftKey;return b});b.wbg.__wbg_altKey_c6c2a7e797d9a669=(a=>{const b=c(a).altKey;return b});b.wbg.__wbg_metaKey_2a8dbd51a3f59e9c=(a=>{const b=c(a).metaKey;return b});b.wbg.__wbg_button_cd87b6dabbde9631=(a=>{const b=c(a).button;return b});b.wbg.__wbg_now_b724952e890dc703=(a=>{const b=c(a).now();return b});b.wbg.__wbg_setProperty_ecf331459a4d3891=function(){return A(((a,b,d,e,f)=>{c(a).setProperty(j(b,d),j(e,f))}),arguments)};b.wbg.__wbg_top_da9f6cf2fb5b9968=(a=>{const b=c(a).top;return b});b.wbg.__wbg_left_253905e6c5050382=(a=>{const b=c(a).left;return b});b.wbg.__wbg_matches_9502c0f8ac0be969=(a=>{const b=c(a).matches;return b});b.wbg.__wbg_get_f01601b5a68d10e3=((a,b)=>{const d=c(a)[b>>>N];return k(d)});b.wbg.__wbg_length_1009b1af0c481d7b=(a=>{const b=c(a).length;return b});b.wbg.__wbg_newnoargs_c62ea9419c21fbac=((a,b)=>{const c=new Function(j(a,b));return k(c)});b.wbg.__wbg_call_90c26b09837aba1c=function(){return A(((a,b)=>{const d=c(a).call(c(b));return k(d)}),arguments)};b.wbg.__wbg_self_f0e34d89f33b99fd=function(){return A((()=>{const a=self.self;return k(a)}),arguments)};b.wbg.__wbg_window_d3b084224f4774d7=function(){return A((()=>{const a=window.window;return k(a)}),arguments)};b.wbg.__wbg_globalThis_9caa27ff917c6860=function(){return A((()=>{const a=globalThis.globalThis;return k(a)}),arguments)};b.wbg.__wbg_global_35dfdd59a4da3e74=function(){return A((()=>{const a=global.global;return k(a)}),arguments)};b.wbg.__wbg_resolve_6e1c6553a82f85b7=(a=>{const b=Promise.resolve(c(a));return k(b)});b.wbg.__wbg_then_3ab08cd4fbb91ae9=((a,b)=>{const d=c(a).then(c(b));return k(d)});b.wbg.__wbg_then_8371cc12cfedc5a2=((a,b,d)=>{const e=c(a).then(c(b),c(d));return k(e)});b.wbg.__wbg_buffer_a448f833075b71ba=(a=>{const b=c(a).buffer;return k(b)});b.wbg.__wbg_newwithbyteoffsetandlength_b2f5b737836be06b=((a,b,d)=>{const e=new Int8Array(c(a),b>>>N,d>>>N);return k(e)});b.wbg.__wbg_newwithbyteoffsetandlength_c370f7b5f8986669=((a,b,d)=>{const e=new Int16Array(c(a),b>>>N,d>>>N);return k(e)});b.wbg.__wbg_newwithbyteoffsetandlength_be0a0b31d480f4b2=((a,b,d)=>{const e=new R(c(a),b>>>N,d>>>N);return k(e)});b.wbg.__wbg_newwithbyteoffsetandlength_d0482f893617af71=((a,b,d)=>{const e=new O(c(a),b>>>N,d>>>N);return k(e)});b.wbg.__wbg_new_8f67e318f15d7254=(a=>{const b=new O(c(a));return k(b)});b.wbg.__wbg_set_2357bf09366ee480=((a,b,d)=>{c(a).set(c(b),d>>>N)});b.wbg.__wbg_length_1d25fa9e4ac21ce7=(a=>{const b=c(a).length;return b});b.wbg.__wbg_newwithbyteoffsetandlength_099217381c451830=((a,b,d)=>{const e=new Uint16Array(c(a),b>>>N,d>>>N);return k(e)});b.wbg.__wbg_newwithbyteoffsetandlength_7a23ee7b263abe07=((a,b,d)=>{const e=new Uint32Array(c(a),b>>>N,d>>>N);return k(e)});b.wbg.__wbg_newwithbyteoffsetandlength_fa811509d2a67254=((a,b,d)=>{const e=new Float32Array(c(a),b>>>N,d>>>N);return k(e)});b.wbg.__wbindgen_debug_string=((b,d)=>{const e=u(c(d));const f=o(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=l;r()[b/X+ P]=g;r()[b/X+ N]=f});b.wbg.__wbindgen_throw=((a,b)=>{throw new M(j(a,b))});b.wbg.__wbindgen_memory=(()=>{const b=a.memory;return k(b)});b.wbg.__wbindgen_closure_wrapper782=((a,b,c)=>{const d=v(a,b,Y,w);return k(d)});b.wbg.__wbindgen_closure_wrapper784=((a,b,c)=>{const d=v(a,b,Y,x);return k(d)});b.wbg.__wbindgen_closure_wrapper786=((a,b,c)=>{const d=v(a,b,Y,y);return k(d)});b.wbg.__wbindgen_closure_wrapper1057=((a,b,c)=>{const d=v(a,b,291,z);return k(d)});return b});var w=((b,c,d)=>{a.wasm_bindgen__convert__closures__invoke1_mut__he322a88c10d9a112(b,c,k(d))});var x=((b,c)=>{a.wasm_bindgen__convert__closures__invoke0_mut__he448fc88aa3c57a6(b,c)});var u=(a=>{const b=typeof a;if(b==S||b==T||a==J){return `${a}`};if(b==U){return `"${a}"`};if(b==`symbol`){const b=a.description;if(b==J){return `Symbol`}else{return `Symbol(${b})`}};if(b==Q){const b=a.name;if(typeof b==U&&b.length>N){return `Function(${b})`}else{return `Function`}};if(H.isArray(a)){const b=a.length;let c=`[`;if(b>N){c+=u(a[N])};for(let d=P;d<b;d++){c+=`, `+ u(a[d])};c+=`]`;return c};const c=/\[object ([^\]]+)\]/.exec(toString.call(a));let d;if(c.length>P){d=c[P]}else{return toString.call(a)};if(d==V){try{return `Object(`+ JSON.stringify(a)+ `)`}catch(a){return V}};if(a instanceof M){return `${a.name}: ${a.message}\n${a.stack}`};return d});var r=(()=>{if(q===J||q.byteLength===N){q=new R(a.memory.buffer)};return q});var f=(a=>{const b=c(a);e(a);return b});var e=(a=>{if(a<132)return;b[a]=d;d=a});var G=(async(b)=>{if(a!==I)return a;if(typeof b===K){b=new URL(`eframe_template_bg.wasm`,import.meta.url)};const c=C();if(typeof b===U||typeof Request===Q&&b instanceof Request||typeof URL===Q&&b instanceof URL){b=fetch(b)};D(c);const {instance:d,module:e}=await B(await b,c);return E(d,e)});var z=((b,c,d)=>{a._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h327f0d7a9fd72e13(b,c,k(d))});var y=((b,c)=>{try{const g=a.__wbindgen_add_to_stack_pointer(-W);a.wasm_bindgen__convert__closures__invoke0_mut__he58709a6da07c4da(g,b,c);var d=r()[g/X+ N];var e=r()[g/X+ P];if(e){throw f(d)}}finally{a.__wbindgen_add_to_stack_pointer(W)}});var p=(a=>a===I||a===J);var i=(()=>{if(h===J||h.byteLength===N){h=new O(a.memory.buffer)};return h});var o=((a,b,c)=>{if(c===I){const c=m.encode(a);const d=b(c.length,P)>>>N;i().subarray(d,d+ c.length).set(c);l=c.length;return d};let d=a.length;let e=b(d,P)>>>N;const f=i();let g=N;for(;g<d;g++){const b=a.charCodeAt(g);if(b>127)break;f[e+ g]=b};if(g!==d){if(g!==N){a=a.slice(g)};e=c(e,d,d=g+ a.length*3,P)>>>N;const b=i().subarray(e+ g,e+ d);const f=n(a,b);g+=f.written};l=g;return e});var B=(async(a,b)=>{if(typeof Response===Q&&a instanceof Response){if(typeof WebAssembly.instantiateStreaming===Q){try{return await WebAssembly.instantiateStreaming(a,b)}catch(b){if(a.headers.get(`Content-Type`)!=`application/wasm`){console.warn(`\`WebAssembly.instantiateStreaming\` failed because your server does not serve wasm with \`application/wasm\` MIME type. Falling back to \`WebAssembly.instantiate\` which is slower. Original error:\\n`,b)}else{throw b}}};const c=await a.arrayBuffer();return await WebAssembly.instantiate(c,b)}else{const c=await WebAssembly.instantiate(a,b);if(c instanceof WebAssembly.Instance){return {instance:c,module:a}}else{return c}}});var v=((b,c,d,e)=>{const f={a:b,b:c,cnt:P,dtor:d};const g=(...b)=>{f.cnt++;const c=f.a;f.a=N;try{return e(c,f.b,...b)}finally{if(--f.cnt===N){a.__wbindgen_export_2.get(f.dtor)(c,f.b)}else{f.a=c}}};g.original=f;return g});var F=(b=>{if(a!==I)return a;const c=C();D(c);if(!(b instanceof WebAssembly.Module)){b=new WebAssembly.Module(b)};const d=new WebAssembly.Instance(b,c);return E(d,b)});var D=((a,b)=>{});let a;const b=new H(128).fill(I);b.push(I,J,!0,!1);let d=b.length;const g=typeof TextDecoder!==K?new TextDecoder(L,{ignoreBOM:!0,fatal:!0}):{decode:()=>{throw M(`TextDecoder not available`)}};if(typeof TextDecoder!==K){g.decode()};let h=J;let l=N;const m=typeof TextEncoder!==K?new TextEncoder(L):{encode:()=>{throw M(`TextEncoder not available`)}};const n=typeof m.encodeInto===Q?((a,b)=>m.encodeInto(a,b)):((a,b)=>{const c=m.encode(a);b.set(c);return {read:a.length,written:c.length}});let q=J;let s=J;export default G;export{F as initSync}