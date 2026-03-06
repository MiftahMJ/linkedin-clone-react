import React, { useState } from "react";
import { Check, TrendingUp, Users, MessageSquare, Bell, BarChart2, Zap } from "lucide-react";

const plans = [
  {
    id: "starter",
    name: "Starter Plan",
    price: 39,
    description: "Perfect for individual sales professionals",
    features: [
      "Advanced Lead Search",
      "Unlimited Lead Recommendations",
      "Save Leads & Accounts",
      "Direct Messaging",
    ],
    cta: "Start Free Trial",
    popular: false,
    ctaStyle: "outline",
  },
  {
    id: "professional",
    name: "Professional Plan",
    price: 79,
    description: "Try it free for 30 days",
    features: [
      "All Starter Features",
      "Advanced Lead Search",
      "Lead Lists",
      "Team Collaboration",
    ],
    cta: "Start 30 Day Trial",
    popular: true,
    ctaStyle: "filled",
  },
  {
    id: "enterprise",
    name: "Enterprise Plan",
    price: 149,
    description: "For large sales teams & organizations",
    features: [
      "CRM Sync",
      "Team Lead Sharing",
      "Advanced Reporting",
    ],
    cta: "Contact Sales",
    popular: false,
    ctaStyle: "filled",
  },
];

const highlights = [
  { icon: TrendingUp, text: "Advanced Lead Recommendations" },
  { icon: Users, text: "Save Leads & Accounts" },
  { icon: MessageSquare, text: "Direct Messaging" },
  { icon: Bell, text: "Real-time Sales Alerts" },
  { icon: BarChart2, text: "CRM Integration" },
];

const trustedBrands = ["Slack", "Stripe", "ZOHO", "HubSpot"];

const SalesNavigator = () => {
  const [billingCycle, setBillingCycle] = useState("monthly");

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      {/* Hero Section */}
      <div className="bg-white rounded-2xl shadow-soft overflow-hidden mb-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
          {/* Left Content */}
          <div className="p-8 lg:p-10 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 bg-primary-50 text-primary-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-4 w-fit">
              <Zap className="w-3.5 h-3.5" />
              SALES NAVIGATOR
            </div>
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3 leading-tight">
              ProNet Sales Navigator
            </h1>
            <p className="text-gray-500 text-lg mb-6">
              Find and connect with the right leads faster
            </p>
            <ul className="space-y-3">
              {highlights.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-center gap-3">
                  <span className="w-5 h-5 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-primary-700 stroke-[3]" />
                  </span>
                  <span className="text-gray-700 font-medium text-sm">{text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Illustration */}
          <div className="relative bg-gradient-to-br from-primary-50 via-amber-50 to-orange-50 flex items-center justify-center p-8 min-h-[260px]">
            {/* Abstract illustration elements */}
            <div className="relative w-full max-w-xs">
              {/* Mock dashboard card */}
              <div className="bg-white rounded-xl shadow-medium p-4 mb-3">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center text-white font-bold text-sm">S</div>
                  <div>
                    <div className="h-2.5 bg-gray-200 rounded w-24 mb-1.5"></div>
                    <div className="h-2 bg-gray-100 rounded w-16"></div>
                  </div>
                  <span className="ml-auto text-xs font-semibold text-primary-600 bg-primary-50 px-2 py-1 rounded-full">Connect</span>
                </div>
                <div className="flex gap-2">
                  {[60, 80, 45, 90, 70, 55, 85].map((h, i) => (
                    <div key={i} className="flex-1 rounded-sm" style={{ height: `${h * 0.4}px`, background: i === 5 ? '#92400e' : '#e8d5c0' }}></div>
                  ))}
                </div>
              </div>
              {/* Floating badge */}
              <div className="absolute -top-4 -right-4 bg-primary-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-medium">
                +42 leads
              </div>
              {/* Second card */}
              <div className="bg-white rounded-xl shadow-soft p-3 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center">
                  <TrendingUp className="w-4 h-4 text-amber-700" />
                </div>
                <div className="flex-1">
                  <div className="text-xs font-semibold text-gray-800">Sales up 34%</div>
                  <div className="h-1.5 bg-gray-100 rounded-full mt-1 overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-primary-500 to-amber-500 rounded-full" style={{ width: '68%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Billing Toggle */}
      <div className="flex justify-center mb-6">
        <div className="bg-white rounded-xl shadow-soft p-1 flex gap-1 inline-flex">
          <button
            onClick={() => setBillingCycle("monthly")}
            className={`px-5 py-2 rounded-lg text-sm font-semibold transition-all ${
              billingCycle === "monthly"
                ? "bg-primary-600 text-white shadow-sm"
                : "text-gray-500 hover:text-gray-800"
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setBillingCycle("annual")}
            className={`px-5 py-2 rounded-lg text-sm font-semibold transition-all flex items-center gap-2 ${
              billingCycle === "annual"
                ? "bg-primary-600 text-white shadow-sm"
                : "text-gray-500 hover:text-gray-800"
            }`}
          >
            Annual
            <span className="text-xs bg-amber-100 text-amber-700 px-1.5 py-0.5 rounded-full font-bold">-20%</span>
          </button>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
        {plans.map((plan) => {
          const displayPrice = billingCycle === "annual"
            ? Math.round(plan.price * 0.8)
            : plan.price;

          return (
            <div
              key={plan.id}
              className={`relative rounded-2xl overflow-hidden transition-all duration-200 ${
                plan.popular
                  ? "shadow-strong ring-2 ring-primary-600 scale-[1.02]"
                  : "bg-white shadow-soft hover:shadow-medium"
              }`}
            >
              {plan.popular && (
                <div className="bg-primary-600 text-white text-center py-2">
                  <span className="text-xs font-bold tracking-wider uppercase flex items-center justify-center gap-1.5">
                    <Zap className="w-3 h-3" /> Most Popular
                  </span>
                </div>
              )}

              {/* Header */}
              <div className={`p-6 ${plan.popular ? "bg-primary-700" : "bg-white border-b border-gray-100"}`}>
                <h3 className={`text-lg font-bold mb-1 ${plan.popular ? "text-white" : "text-gray-900"}`}>
                  {plan.name}
                </h3>
                <div className="flex items-end gap-1 mb-2">
                  <span className={`text-4xl font-extrabold ${plan.popular ? "text-white" : "text-gray-900"}`}>
                    ${displayPrice}
                  </span>
                  <span className={`text-sm mb-1.5 ${plan.popular ? "text-primary-200" : "text-gray-400"}`}>
                    / month
                  </span>
                </div>
                <p className={`text-sm ${plan.popular ? "text-primary-100" : "text-gray-500"}`}>
                  {plan.description}
                </p>
              </div>

              {/* Features */}
              <div className={`p-6 flex-1 ${plan.popular ? "bg-white" : "bg-white"}`}>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5">
                      <span className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                        plan.popular ? "bg-primary-100" : "bg-gray-100"
                      }`}>
                        <Check className={`w-3 h-3 stroke-[3] ${plan.popular ? "text-primary-700" : "text-gray-500"}`} />
                      </span>
                      <span className="text-sm text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-3 rounded-xl font-semibold text-sm transition-all ${
                    plan.ctaStyle === "filled"
                      ? "bg-primary-600 text-white hover:bg-primary-700 shadow-sm hover:shadow-md"
                      : "border-2 border-gray-200 text-gray-500 hover:border-primary-300 hover:text-primary-700"
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Trusted Brands */}
      <div className="bg-white rounded-2xl shadow-soft p-6 text-center">
        <p className="text-gray-500 text-sm font-medium mb-5">Trusted by sales professionals worldwide</p>
        <div className="flex items-center justify-center gap-8 flex-wrap">
          {trustedBrands.map((brand) => (
            <span
              key={brand}
              className="text-lg font-bold text-gray-400 hover:text-gray-600 transition-colors cursor-default tracking-tight"
            >
              {brand}
            </span>
          ))}
        </div>
      </div>

      {/* Footer links */}
      <div className="flex items-center justify-center gap-4 mt-6 text-xs text-gray-400">
        <a href="#" className="hover:text-primary-600 transition-colors">Privacy Policy</a>
        <span>|</span>
        <a href="#" className="hover:text-primary-600 transition-colors">Terms of Service</a>
        <span>|</span>
        <a href="#" className="hover:text-primary-600 transition-colors">Contact Support</a>
      </div>
    </div>
  );
};

export default SalesNavigator;
